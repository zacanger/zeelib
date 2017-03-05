// @flow

const formatMs = (ms: number) : string => {
  const hr = 3600000
  const min = 60000
  const sec = 1000

  let hours = Math.floor(ms / hr)
  let minutes = Math.floor((ms - (hours * hr)) / min)
  let seconds = Math.round((ms - (hours * hr) - (minutes * min)) / sec)

  if (hours && minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds

  let str = minutes + ':' + seconds
  if (hours) str = hours + ':' + str

  return str
}

export default formatMs
