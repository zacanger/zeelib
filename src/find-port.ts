import { createServer } from 'node:net'

type NodeError = {
  code: string
} & Error

/**
 * Find next open port
 * @example
 * findPort(8000, (err, port) => console.log(`${port} is open`))
 */

export const findPort = (
  port: number,
  cb: (x: Error | null, y?: number) => void,
): void => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const server = createServer((): void => {})
  const onListen = (): void => {
    server.close()
    cb(null, port)
  }

  const onError = (err: NodeError): void => {
    server.removeListener('listening', onListen)
    if (err.code && [ 'EADDRINUSE', 'EACCESS' ].includes(err.code)) {
      return cb(err)
    }
    findPort(port + 1, cb)
  }

  server.once('error', onError)
  server.once('listening', onListen)
  server.listen(port)
}
