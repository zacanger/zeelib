import * as fs from 'fs'

type NodeError = {
  code?: string
} & Error

const mv = (oldPath: string, nextPath: string, cb: (x?: any) => any): void => {
  fs.rename(oldPath, nextPath, (err?: NodeError): void => {
    if (err) {
      if (err.code && err.code === 'EXDEV') {
        const readStream = fs.createReadStream(oldPath)
        const writeStream = fs.createWriteStream(nextPath)
        readStream.on('error', cb)
        writeStream.on('error', cb)
        readStream.on('close', (): void => {
          fs.unlink(oldPath, cb)
        })
        readStream.pipe(writeStream)
      } else {
        cb(err)
      }
      return
    }
    cb()
  })
}

export default mv
