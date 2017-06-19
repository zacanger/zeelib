const toType = (val) => {
  console.error('`toType` is deprecated. Use `typeOf` instead.')
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

export default toType
