import * as fs from 'fs'

type NodeError = {
  code?: string
} & Error

const mv = (oldPath: string, newPath: string, cb: (x?: any) => any): void => {
  fs.rename(oldPath, newPath, (err?: NodeError): void => {
    if (err) {
      if (err.code && err.code === 'EXDEV') {
        const readStream = fs.createReadStream(oldPath)
        const writeStream = fs.createWriteStream(newPath)
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
