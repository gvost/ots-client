
// generates a special action type for actions that return promises

// use in an actionTypes file like this:
//   export const GET_CHATS = promiseActionType('chats/GET_CHATS')

// the middleware will split the action into four separate actions as follows:

export default function promiseActionType(baseType) {
  return {
    pending: baseType + '/pending',
    then:    baseType + '/then',
    catch:   baseType + '/catch',
    finally: baseType + '/finally'
  }
}