
////////////////// IMPORTS //////////////////

import request from '@util/request'
import { firebase as config } from '@config'

/////////////////// CONFIG //////////////////

const BASE_URL = config.cloudURL

/////////////// CLOUD FUNCTIONS /////////////

function createAccount(username, password, affiliation) {
  return request.post(BASE_URL + '/createAccount', {
    username,
    password,
    affiliation
  })
}

function login(username, password) {
  return request.post(BASE_URL + '/login', {
    username,
    password
  })
}

////////////////// EXPORTS //////////////////

export {
  createAccount,
  login
}