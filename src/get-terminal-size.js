// @flow

/**
 * Returns size of the current terminal
 * @returns {object} columns, rows
 * @example
 * getTerminalSize() // => { columns: number, rows: number }
 */

const getTerminalSize = () => ({
  // $FlowFixMe
  columns: process.stdout.columns,
  // $FlowFixMe
  rows: process.stdout.rows
})

export default getTerminalSize
