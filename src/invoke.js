const invoke = (fn, ...args) => {
  console.error('`invoke` is deprecated. Please use `apply`.')
  return fn(...args)
}

export default invoke
