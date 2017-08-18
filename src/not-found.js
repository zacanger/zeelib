// @flow

import { createReadStream } from 'fs'
import { resolve } from 'path'

const notFound = (config: string) => {
  console.error('`notFound` is deprecated. Please use a real lib for this.')
  const status = 404
  const filePath = config

  return (req: Object, res: Object) => {
    res.writeHead(status, { 'Content-Type': 'text/html' })
    createReadStream(resolve(filePath)).pipe(res)
  }
}

export default notFound
