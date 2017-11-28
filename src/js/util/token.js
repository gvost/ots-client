
///////////// IMPORTS //////////////

import { AsyncStorage } from 'react-native'

///////////// EXPORTS //////////////

module.exports = {
  saveToken: (token) => {
    return AsyncStorage.setItem('token', token)
  },
  getToken: () => {
    return AsyncStorage.getItem('token')
  }
}