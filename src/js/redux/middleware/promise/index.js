
import { isPromise } from '@util/misc'

export default store => next => action => {
  let { type, promise } = action

  if (!isPromise(promise))
    return next(action)

  // remove properties specific to this middleware
  delete action.promise

  // dispatch the pending action
  next({ ...action, type: type.pending })

  // dispatch the then/catch/finally action object & return the response
  return promise
    .then(response => {
      next({ ...action, type: type.then, response })
      return response
    }, error => {
      next({ ...action, type: type.catch, error: error.message })
      return error
    })
    .finally(() => {
      next({ ...action, type: type.finally })
      return null
    })
}
