
import promiseActionType from '@promiseActionType'
import updaterActionType from '@updaterActionType'

export const GET_CHATS              = promiseActionType('chats/GET_CHATS')
export const GET_MESSAGES           = promiseActionType('chats/GET_MESSAGES')
export const MONITOR_MESSAGES       = updaterActionType('chats/MONITOR_MESSAGES')
export const LOAD_EARLIER_MESSAGES  = promiseActionType('chats/LOAD_EARLIER_MESSAGES')
export const PUT_MESSAGE            = promiseActionType('chats/PUT_MESSAGE')
export const EXIT_CHAT              = 'chats/EXIT_CHAT'

