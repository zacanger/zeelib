type Timer = NodeJS.Timeout | number | null
type R = (...args: any[]) => Timer

/**
 * Simple debounce
 * @example
 * debounce(() => console.log('hi'), 5000)
 */

const debounce = (fn: (...args: any) => any, ms: number): R => {
  let timeout: Timer

  return (...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    const later = (): void => {
      timeout = null
      fn.apply(context, args)
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, ms)
    return timeout
  }
}

export default debounce
