const newlinesToSpaces = (str) => {
  console.error('`newlinesToSpaces` is deprecated. Please use `collapseWhitespace` instead.')
  return str.replace(/\s+/g, ' ').trim()
}

export default newlinesToSpaces
