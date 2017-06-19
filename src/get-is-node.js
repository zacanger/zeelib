const getIsNode = () => {
  console.error('`getIsNode` is deprecated. Please use `isNode`.')
  return process && !!process.version
}

export default getIsNode
