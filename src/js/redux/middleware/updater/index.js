
export default store => next => action => {
  let { type, updater, updaterArgs = [] } = action

  // if no updater, move on
  if (!updater)
    return next(action)

  // remove properties specific to this middleware
  delete action.updater
  delete action.updaterArgs

  // create onUpdate and onError functions and add to updaterArgs
  onUpdate = (response) => next({ ...action, type: type.update, response })
  onError = (error) => next({ ...action, type: type.error, error })
  updaterArgs.push(onUpdate)
  updaterArgs.push(onError)

  // call the updater with all the args
  let unsubscribe = updater.apply(null, updaterArgs)

  // dispatch the pending action, with the unsubscribe listener
  return next({ ...action, type: type.pending, unsubscribe })
}
