
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from './middleware/thunk'
import promise from './middleware/promise'
import updater from './middleware/updater'
import errorHandler from './middleware/errorHandler'

export default function(rootReducer, initialState={}) {
  return createStore(
    rootReducer, initialState, composeWithDevTools(
      applyMiddleware(thunk, promise, updater, errorHandler)
    )
  )
}
