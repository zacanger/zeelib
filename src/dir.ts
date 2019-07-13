/**
 * `console.dir` with colors by default in Node
 * @example
 * dir({ foo: 'bar' }) // => { foo: 'bar' }
 */

const dir = (obj: any): void => console.dir(obj, { colors: true })

export default dir
