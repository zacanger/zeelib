interface Size { columns: number, rows: number }

/**
 * Returns size of the current terminal
 * @example
 * getTerminalSize() // => { columns: number, rows: number }
 */

const getTerminalSize = (): Size => ({
  columns: process.stdout.columns,
  rows: process.stdout.rows,
})

export default getTerminalSize
