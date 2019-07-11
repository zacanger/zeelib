/**
 * Get columns of current terminal
 * @returns {number} columns
 * @example
 * getTerminalColumns()
 */

const getTerminalColumns = () => process.stdout.columns

export default getTerminalColumns
