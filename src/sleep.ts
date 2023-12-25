/**
 * Simple sleep.
 * @example
 * const delay = await sleep(1000)
 * sleep(1000).then(doAThing)
 */

const sleep = async (ms: number): Promise<void> =>
  await new Promise((resolve): void => {
    setTimeout(resolve, ms)
  })

export default sleep
