const isPromise = (a) => a && typeof a.then === 'function'
export default isPromise
