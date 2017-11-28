import * as types from './actionTypes'
import find from 'lodash/find'

const initialState = []

function updateChat(state, action, cb) {
  return state.map(chat => {
    if (chat.chatId === action.chatId)
      return cb(chat, action)
    else
      return chat
  })
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {

    // GET_CHATS
    case types.GET_CHATS.then:
      return [
        ...state,
        ...action.response
      ]

    // GET_MESSAGES
    case types.GET_MESSAGES.then:
      return updateChat(state, action, (chat, action) => {
        return {
          ...chat,
          messages: action.response
        }
      })

    // MONITOR_MESSAGES
    case types.MONITOR_MESSAGES.pending:
      return updateChat(state, action, (chat, action) => {
        return {
          ...chat,
          unsubscribe: action.unsubscribe
        }
      })

    case types.MONITOR_MESSAGES.update:
      return updateChat(state, action, (chat, action) => {
        return {
          ...chat,
          messages: [
            action.response,
            ...chat.messages
          ]
        }
      })

      // LOAD_EARLIER_MESSAGES
    case types.LOAD_EARLIER_MESSAGES.then:
      return updateChat(state, action, (chat, action) => {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            ...action.response
          ]
        }
      })

    // EXIT_CHAT
    case types.EXIT_CHAT:
      //find(state, { chatId: action.chatId }).unsubscribe()
      return state

    default:
      return state
  }
}