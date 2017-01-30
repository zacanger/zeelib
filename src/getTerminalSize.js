const getTerminalSize = () => ({
  columns: process.stdout.columns
, rows: process.stdout.rows
})
export default getTerminalSize
