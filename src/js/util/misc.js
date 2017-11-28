
export const isPromise = value => value && typeof value.then === 'function'

export const intArray = (size) => Array.apply(null, { length: size }).map((el, idx) => idx)