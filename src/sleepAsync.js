// @flow

/**
 * Async `sleep`. Also see `sleep`.
 * You can `await` it, or `.then` it.
 * Usage: `const delay = await sleepAsync(1000)`
 */

const sleepAsync = (ms: number): Promise<*> =>
  new Promise((resolve): any =>
    setTimeout(resolve, ms))

export default sleepAsync
