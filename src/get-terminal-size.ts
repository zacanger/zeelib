/**
 * Returns size of the current terminal
 * @returns {object} columns, rows
 * @example
 * getTerminalSize() // => { columns: number, rows: number }
 */

const getTerminalSize = () => ({
  columns: process.stdout.columns,
  rows: process.stdout.rows,
})

export default getTerminalSize
