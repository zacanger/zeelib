// @flow

type AnyF = (any) => any

/**
 * Promisify a thing
 * @example
 * promisify(fs.readdir)(args)
 */

const promisify = (f: AnyF) =>
  (...args: any[]): Promise<any> =>
    new Promise((resolve: AnyF, reject: AnyF) =>
      (f)(...args, (err: any, result: any) =>
        err ? reject(err) : resolve(result)))

export default promisify
