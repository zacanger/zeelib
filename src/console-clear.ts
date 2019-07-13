/**
 * `console.clear` for Node and browser
 * @example
 * consoleClear() // => undefined
 */

const consoleClear = (): void => console.log('\x1Bc')

export default consoleClear
