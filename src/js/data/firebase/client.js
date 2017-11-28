
//////////////////// IMPORTS ///////////////////////

import * as firebase from 'firebase'
import 'firebase/firestore'
import { firebase as config } from '@config'

///////////////////// INIT /////////////////////////

const { projectId, databaseURL, apiKey } = config

firebase.initializeApp({
  projectId,
  databaseURL,
  apiKey
})

//////////////////// EXPORTS ///////////////////////

const db   = firebase.firestore()
const auth = firebase.auth()

export {
  firebase,
  db,
  auth
}