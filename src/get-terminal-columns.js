/**
 * Get columns of current terminal
 * @returns {number} columns
 */

const getTerminalColumns = () =>
  process.stdout.columns

export default getTerminalColumns
