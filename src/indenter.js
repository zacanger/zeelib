// @flow
/* eslint-disable no-return-assign */

// line: string to format
// indent: amount by which to indent
// limit: maxlen of line
// accum: accumulator string

const indenter = (
  line: string,
  indent: number = 2,
  limit: number = 80,
  accum: string = ''
) => {
  if (line.length > limit) {
    const reverseSlice = line.slice(0, limit).split('').reverse('')
    const firstSpace = reverseSlice.indexOf(' ')
    const longest = reverseSlice.slice(firstSpace + 1).reverse().join('')
    const rem = ' '.repeat(indent) + line.slice(longest.length + 1)

    return indenter(rem, indent, limit,
      accum += `${longest}\n`
    )
  }
  return accum += line
}

export default indenter
