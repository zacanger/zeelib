/**
 * Get current terminal rows
 * @example
 * getTerminalRows()
 */

const getTerminalRows = (): number =>
  process.stdout.rows

export default getTerminalRows
