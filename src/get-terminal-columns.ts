/**
 * Get columns of current terminal
 * @example
 * getTerminalColumns()
 */

export const getTerminalColumns = (): number =>
  process.stdout.columns
