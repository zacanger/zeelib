/**
 * Returns size of the current terminal
 * @returns {object} columns, rows
 */

const getTerminalSize = () => ({
  columns: process.stdout.columns,
  rows: process.stdout.rows
})
export default getTerminalSize
