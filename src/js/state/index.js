
import { combineReducers } from 'redux'
import auth from './auth/reducer'
import users from './users/reducer'
import chats from './chats/reducer'
import nav from './nav/reducer'

export default combineReducers({
  auth,
  users,
  chats,
  nav
})