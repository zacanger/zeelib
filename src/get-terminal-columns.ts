/**
 * Get columns of current terminal
 * @example
 * getTerminalColumns()
 */

const getTerminalColumns = (): number =>
  process.stdout.columns

export default getTerminalColumns
