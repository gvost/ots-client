
import * as types from './actionTypes'
import AuthDataService from '@data/auth'

export const checkAuth = () => {
  return {
    type: types.CHECK_AUTH,
    promise: AuthDataService.checkAuth()
  }
}

export const login = (username, password) => {
  return {
    type: types.LOGIN,
    promise: AuthDataService.login(username, password)
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT,
    promise: AuthDataService.logout()
  }
}

//AuthDataService.logout()