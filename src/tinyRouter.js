import { readFileSync } from 'fs'

const tinyRouter = (pathname, response) => {
  let html, filePath
  if (pathname !== '/favicon.ico') {
    try {
      filePath = `./${pathname}`
      console.log(`loading ${filePath}`)
      html = readFileSync(filePath)
      response.write(html)
      response.end()
    } catch (err) {
      console.warn(`unable to load ${filePath}`)
      response.end()
    }
  }
}

export default tinyRouter
