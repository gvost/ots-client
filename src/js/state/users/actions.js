
import * as types from './actionTypes'
import UsersDataService from '@data/users'

export const getProfiles = (userIds) => {
  return {
    type: types.GET_PROFILES,
    promise: UsersDataService.getProfiles(userIds)
  }
}

export const updateProfile = (userId, profile) => {
  return {
    type: types.UPDATE_PROFILE,
    promise: UsersDataService.updateProfile(userId, profile)
  }
}
