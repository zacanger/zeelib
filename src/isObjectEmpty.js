// @flow

const isObjectEmpty = (obj: Object) : bool =>
  obj.constructor === Object && Object.keys(obj).length === 0

export default isObjectEmpty
