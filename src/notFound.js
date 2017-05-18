// @flow

import { createReadStream } from 'fs'
import { resolve } from 'path'

/**
 * Very simple 404 handler for Node
 * Takes a path to an html file
 */

const notFound = (config: string) => {
  const status = 404
  const filePath = config

  return (req: Object, res: Object) => {
    res.writeHead(status, { 'Content-Type' : 'text/html' })
    createReadStream(resolve(filePath)).pipe(res)
  }
}

export default notFound
