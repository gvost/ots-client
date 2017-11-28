
//////////////// IMPORTS ////////////////

import Promise from '@util/promise'

/////////////// CONSTANTS ///////////////

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

/////////////// FUNCTIONS ///////////////

function doRequest(url, opts) {
  return fetch(url, {
    ...opts,
    headers: HEADERS
  })
  .then(response => response.json())
}

//////////////// EXPORTS ////////////////

export default {
  get: (url) => {
    return doRequest(url, {
      method: 'GET'
    })
  },
  post: (url, body) => {
    return doRequest(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
  }
}
