// @flow

/**
 * Format ms into human-readable time
 * @example
 * formatMs(1000000000) // => '277:46:40'
 */

const formatMs = (ms: number): string => {
  const hr = 3600000
  const min = 60000
  const sec = 1000

  const hours = Math.floor(ms / hr)
  const minutes = Math.floor((ms - (hours * hr)) / min)
  const seconds = Math.round((ms - (hours * hr) - (minutes * min)) / sec)

  const minutesString = hours && minutes < 10 ? '0' + minutes : minutes.toString()
  const secondString = seconds < 10 ? '0' + seconds : seconds.toString()

  let str: string = minutesString + ':' + secondString
  if (hours) str = hours + ':' + str

  return str
}

export default formatMs
