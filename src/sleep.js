// @flow

/**
 * Simple sleep.
 *
 * You can `await` it, or `.then` it
 * @example
 * const delay = await sleep(1000)
 * sleep(1000).then(doAThing)
 */

const sleep = (ms: number): Promise<*> =>
  new Promise((resolve): any =>
    setTimeout(resolve, ms))

export default sleep
