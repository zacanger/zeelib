// @flow

function logWithTimestamp (): ?string {
  const date = new Date()
  const timestamp = date.getDate() + '/' + date.getMonth() + ' ' + date.getHours() + ':' +
  date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
  const message = Array.prototype.slice.call(arguments)
  message.unshift('--')
  message.unshift(timestamp)
  console.log.apply(console, message)
}

export default logWithTimestamp
