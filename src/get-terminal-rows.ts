/**
 * Get current terminal rows
 * @example
 * getTerminalRows()
 */

export const getTerminalRows = (): number =>
  process.stdout.rows
