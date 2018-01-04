// @flow

/**
 * Promisify a thing
 * @example
 * promisify(fs.readdir)(args)
 */

type Callback<T> = (?Error, ?T) => void

/* eslint-disable no-redeclare, max-len, flowtype/require-return-type */
declare function promisify<T>((Callback<T>) => void): () => Promise<T>
declare function promisify<A, T>((A, Callback<T>) => void): (A) => Promise<T>
declare function promisify<A, B, T>((A, B, Callback<T>) => void): (A, B) => Promise<T>
declare function promisify<A, B, C, T>((A, B, C, Callback<T>) => void): (A, B, C) => Promise<T>
declare function promisify<A, B, C, D, T>((A, B, C, D, Callback<T>) => void): (A, B, C, D) => Promise<T>
declare function promisify<A, B, C, D, E, T>((A, B, C, D, E, Callback<T>) => void): (A, B, C, D, E) => Promise<T>
declare function promisify<A, B, C, D, E, F, T>((A, B, C, D, E, F, Callback<T>) => void): (A, B, C, D, E, F) => Promise<T>
declare function promisify<A, B, C, D, E, F, G, T>((A, B, C, D, E, F, G, Callback<T>) => void): (A, B, C, D, E, F, G) => Promise<T>
declare function promisify(Function): Function // eslint-disable-line flowtype/no-weak-types

function promisify (f) {
  return (...args: mixed[]) =>
    new Promise((resolve, reject): void =>
      f(...args, (err, result) =>
        err ? reject(err) : resolve(result)))
}
/* eslint-enable no-redeclare, max-len, flowtype/require-return-type */

export default promisify
