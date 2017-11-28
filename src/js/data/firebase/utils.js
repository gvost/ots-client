
///////////////// IMPORTS /////////////////

import { db, firebase } from './client'
import Promise from '@util/promise'

//////////////// FUNCTIONS ////////////////

function deepDelete(collRef) {
  console.log(`Deep deleting: ${collRef.path}`)
  return collRef.get()
    .then(querySnapshot => {
      return Promise.map(querySnapshot.docs, doc => {
        return doc.ref.getCollections()
          .then(innerCollRefs => {
            return Promise.map(innerCollRefs, innerCollRef => {
              return deepDelete(innerCollRef)
            })
          })
          .then(() => doc.ref.delete())
      })
  })
}

function arrayToMap(arr) {
  let map = {}
  arr.forEach(el => map[el] = true)
  return map
}

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

///////////////// EXPORTS /////////////////

export {
  deepDelete,
  arrayToMap,
  serverTimestamp
}