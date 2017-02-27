const toType = (v) =>
  ({}).toString.call(v).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

export default toType
