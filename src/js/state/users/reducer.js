import * as types from './actionTypes'

const initialState = {}

export default function reducer(state=initialState, action={}) {
  switch(action.type) {

    case types.GET_PROFILES.pending:
      return {
        ...state,
        loading: true
      }

    case types.GET_PROFILES.then:
      return {
        ...state,
        ...action.response
      }

    case types.GET_PROFILES.finally:
      return {
        ...state,
        loading: false
      }

    case types.UPDATE_PROFILE.then:
      let { userId, profile } = action.response
      return {
        ...state,
        [userId]: {
          ...state[userId].profile,
          ...profile
        }
      }

    default:
      return state
  }
}