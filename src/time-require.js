/* eslint-disable  */

import { readFileSync } from 'fs'

const timeRequire = () => {
  console.error('`timeRequire` is deprecated. Please use the `node-require-timings` lib.')
  return require.extensions['.js'] = (module, filename) => {
    const strt = new Date()
    const cont = readFileSync(filename, 'utf8').toString()
    const modl = module._compile(cont, filename)
    const arry = []
    const item = `${new Date() - strt} : ${filename}`
    arry.push(item)
    console.log(arry)
    return modl
  }
}

export default timeRequire
