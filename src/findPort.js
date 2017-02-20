import { createServer } from 'net'

// find next open port
// findPort(8000, (err, port) => {})
const findPort = (port, cb) => {
  const server = createServer(() => {})
  const onListen = () => {
    server.removeListener('error', onError)
    server.close()
    cb(null, port)
  }
  const onError = (err) => {
    server.removeListener('listening', onListen)
    if (err.code !== ('EADDRINUSE' || 'EACCESS')) {
      return cb(err)
    }
    findPort(port + 1, cb)
  }
  server.once('error', onError)
  server.once('listening', onListen)
  server.listen(port)
}

export default findPort
