
import * as types from './actionTypes'
import ChatsDataService from '@data/chats'
import find from 'lodash/find'

export const getChats = () => {
  return {
    type: types.GET_CHATS,
    promise: ChatsDataService.getChats()
  }
}

export const getMessages = (chatId) => {
  return (dispatch) => {
    return dispatch({
      type: types.GET_MESSAGES,
      promise: ChatsDataService.getMessages(chatId),
      chatId
    })
    .then(() => dispatch(monitorMessages(chatId)))
  }
}

const monitorMessages = (chatId) => {
  return {
    type: types.MONITOR_MESSAGES,
    updater: ChatsDataService.monitorMessages,
    updaterArgs: [ chatId ],
    chatId
  }
}

export const loadEarlierMessages = (chatId) => {
  return (dispatch, getState) => {
    let { messages } = find(getState().chats, { chatId })
    let earliestMessageId = messages[messages.length - 1].messageId
    return dispatch({
      type: types.LOAD_EARLIER_MESSAGES,
      promise: ChatsDataService.loadEarlierMessages(chatId, earliestMessageId),
      chatId
    })
  }
}

export const putMessage = (chatId, message) => {
  return (dispatch, getState) => {
    let state = getState()
    let { userId } = state.auth
    let { numMessages } = find(state.chats, { chatId }).meta
    return dispatch({
      type: types.PUT_MESSAGE,
      promise: ChatsDataService.putMessage(chatId, message, userId, numMessages)
    })
  }
}

export const exitChat = (chatId) => {
  return {
    type: types.EXIT_CHAT,
    chatId
  }
}
