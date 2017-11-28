
////////////////// IMPORTS ////////////////////

import { db } from './firebase/client'
import Promise from '@util/promise'

/////////////// DATA SERVICE //////////////////

class UsersDataService {

  getProfiles(userIds) {
    return Promise.map(userIds, userId => {
      return db.doc(`users/${userId}`)
        .get()
        .then(doc => ({
          ...doc.data(),
          userId
        }))
    })
    .then(users => {
      let profiles = {}
      users.forEach(user => {
        profiles[user.userId] = user.profile
      })
      return Promise.resolve(profiles)
    })
  }

  updateProfile(userId, profile) {
    return db.doc(`users/${userId}`)
      .update({ profile })
      .then(data => ({
        userId,
        profile
      }))
  }

  // UNUSED
  monitorProfile(userId, onUpdate, onError) {
    return db.doc(`users/${userId}`)
      .onSnapshot(
        doc => onUpdate(doc.data().profile),
        err => onError(err)
      )
  }

}

////////////////// EXPORTS ////////////////////

export default new UsersDataService()

