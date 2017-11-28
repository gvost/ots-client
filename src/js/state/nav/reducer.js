
import * as types from './actionTypes'
import AppRouter from '@navigation/AppRouter'

const initialState = AppRouter.router.getStateForAction(AppRouter.router.getActionForPathAndParams('Login'))

export default function reducer(state=initialState, action={}) {
  const nextState = AppRouter.router.getStateForAction(action, state)
  return nextState || state
}