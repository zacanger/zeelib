// @flow

/**
 * Get current terminal rows
 * @returns {number} rows
 * @example
 * getTerminalRows()
 */

// $FlowFixMe
const getTerminalRows = () => process.stdout.rows

export default getTerminalRows
