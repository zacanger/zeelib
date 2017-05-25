// @flow

const newlinesToSpaces = (str: string): string => {
  console.error('`newlinesToSpaces` is deprecated. Please use `collapseWhitespace` instead.')
  return str.replace(/\s+/g, ' ').trim()
}

export default newlinesToSpaces
