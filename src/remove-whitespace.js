const removeWhitespace = (str) => {
  console.error('`removeWhitespace` is deprecated. Please use `collapseWhitespace`.')
  return str.replace(/^\s+|\s+$/, '')
}

export default removeWhitespace
