/* eslint-disable no-return-assign */

const indenter = (
  line,
  indent,
  limit,
  accum
) => {
  console.error('`indenter` is deprecated.')
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
