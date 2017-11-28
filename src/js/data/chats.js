
////////////////// IMPORTS ////////////////////

import { db } from './firebase/client'
import { serverTimestamp } from './firebase/utils'
import Promise from '@util/promise'

/////////////////// CONFIG ////////////////////

const CHAT_BATCH_SIZE = 10
const MESSAGE_BATCH_SIZE = 15
const TAIL_MONITOR_SIZE = 10

//////////////// DATA SERVICE /////////////////

class ChatsDataService {

  getChats() {
    return db.collection('chats')
      .orderBy('meta.createdAt', 'desc')
      .limit(CHAT_BATCH_SIZE)
      .get()
      .then(snap => snap.docs.map(doc => ({
        ...doc.data(),
        chatId: doc.id
      })))
  }

  getMessages(chatId) {
    return db.collection(`chats/${chatId}/messages`)
      .orderBy('createdAt', 'desc')
      .limit(MESSAGE_BATCH_SIZE)
      .get()
      .then(snap => snap.docs.map(doc => ({
        ...doc.data(),
        messageId: doc.id
      })))
  }

  monitorMessages(chatId, onUpdate, onError) {
    let firstBatch = true
    return db.collection(`chats/${chatId}/messages`)
      .orderBy('createdAt', 'desc')
      .limit(TAIL_MONITOR_SIZE)
      .onSnapshot(
        snap => {
          if (firstBatch)
            firstBatch = false
          else
            snap.docChanges.forEach(change => {
              if (change.type === 'added')
                onUpdate({
                  ...change.doc.data(),
                  messageId: change.doc.id
                })
            })
        },
        error => onError(error)
      )
  }

  putMessage(chatId, text, userId, numMessages) {
    return Promise.all([
      db.collection(`chats/${chatId}/messages`).add({
        text,
        userId,
        createdAt: serverTimestamp()
      }),
      db.doc(`chats/${chatId}`).update({
        'meta.numMessages': numMessages + 1
      })
    ])
  }

  loadEarlierMessages(chatId, earliestMessageId) {
    messagesRef = db.collection(`chats/${chatId}/messages`)
    return messagesRef.doc(earliestMessageId)
      .get()
      .then(earliestRef => {
        return messagesRef
          .orderBy('createdAt', 'desc')
          .startAfter(earliestRef)
          .limit(MESSAGE_BATCH_SIZE)
          .get()
          .then(snap => snap.docs.map(doc => ({
            ...doc.data(),
            messageId: doc.id
          })))
      })
  }

}

////////////////// EXPORTS ////////////////////

export default new ChatsDataService()

