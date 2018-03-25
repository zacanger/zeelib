// @flow

import { createServer } from 'net'

type NodeError = {
  code: string
} & Error

/**
 * Find next open port
 * @example
 * findPort(8000, (err, port) => console.log(`${port} is open`))
 */

const findPort = (port: number, cb: (Error | null, ?number) => void): void => {
  const server = createServer((): void => {})
  const onListen = (): void => {
    server.removeListener('error', onError) // eslint-disable-line no-use-before-define
    server.close()
    cb(null, port)
  }

  server.once('error', onError)
  server.once('listening', onListen)
  server.listen(port)

  function onError (err: NodeError): void {
    server.removeListener('listening', onListen)
    if (err.code && [ 'EADDRINUSE', 'EACCESS' ].includes(err.code)) {
      return cb(err)
    }
    findPort(port + 1, cb)
  }
}

export default findPort
