import * as types from './actionTypes'

const initialState = {
  authChecked: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isAuthenticated: false,
  userId: null,
  authError: null
}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {

    // CHECK_AUTH
    case types.CHECK_AUTH.then:
      if (action.response)
        return {
          ...state,
          isAuthenticated: true,
          userId: action.response
        }
      else
        return state
    case types.CHECK_AUTH.finally: {
      return {
        ...state,
        authChecked: true
      }
    }

    // LOGIN
    case types.LOGIN.pending:
      return {
        ...state,
        isLoggingIn: true,
        authError: null
      }
    case types.LOGIN.then:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.response
      }
    case types.LOGIN.catch:
      return {
        ...state,
        authError: action.error
      }
    case types.LOGIN.finally: {
      return {
        ...state,
        isLoggingIn: false
      }
    }

    // LOGOUT
    case types.LOGOUT.pending:
      return {
        ...state,
        isLoggingOut: true
      }
    case types.LOGOUT.then:
      return {
        ...state,
        isAuthenticated: false,
        userId: null
      }
    case types.LOGOUT.finally:
      return {
        ...state,
        isLoggingOut: false
      }

    default:
      return state
  }
}