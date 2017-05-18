const isObjectEmpty = (obj) => {
  console.error('`isObjectEmpty` is deprecated. Please use `isEmpty` instead.')
  return obj.constructor === Object && Object.keys(obj).length === 0
}

export default isObjectEmpty
