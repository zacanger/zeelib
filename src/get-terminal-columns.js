// @flow

/**
 * Get columns of current terminal
 * @returns {number} columns
 * @example
 * getTerminalColumns()
 */

// $FlowFixMe
const getTerminalColumns = () => process.stdout.columns

export default getTerminalColumns
