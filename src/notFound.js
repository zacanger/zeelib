import { createReadStream } from 'fs'
import { resolve } from 'path'

const notFound = (config) => {
  const status = 404
  const filePath = config

  return (req, res) => {
    res.writeHead(status, { 'Content-Type' : 'text/html' })
    createReadStream(resolve(filePath)).pipe(res)
  }
}

export default notFound
