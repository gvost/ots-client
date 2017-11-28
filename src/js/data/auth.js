
/////////////////// IMPORTS /////////////////

import { auth } from './firebase/client'
import * as cloud from './firebase/cloud'
import Promise from '@util/promise'

/////////////// PRIVATE FUNCTIONS ///////////

function getUserIdFromToken(token) {
  return new Promise((resolve, reject) => {
    auth.signInWithCustomToken(token)
      .then(user => resolve(user.uid))
  })
}

///////////////// DATA SERVICE //////////////

class AuthDataService {

  createAccount(username, password, affiliation) {
    return cloud.createAccount(username, password, affiliation)
  }

  login(username, password) {
    return cloud.login(username, password)
      .then(res => {
        if (res.error)
          return Promise.reject(new Error(res.error))
        else
          return getUserIdFromToken(res.token)
      })
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => resolve(user ? user.uid : null))
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      auth.signOut().then(resolve).catch(reject)
    })
  }

}

export default new AuthDataService()
