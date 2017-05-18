// @flow

/**
 * Sync sleep. Also see `sleepAsync`.
 */

const sleep = (ms: number): void => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

export default sleep
