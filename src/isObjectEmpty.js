const isObjectEmpty = obj =>
  obj.constructor === Object && Object.keys(obj).length === 0

export default isObjectEmpty
