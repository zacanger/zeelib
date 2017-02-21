// @flow

import { readdirSync } from 'fs'

const getNodeModules = () : Object => {
  const nodeModules = {}
  readdirSync('node_modules')
    .filter((a) => ['.bin'].indexOf(a) === -1)
    .forEach((b) => {
      nodeModules[b] = 'commonjs ' + b
    })
  return nodeModules
}

export default getNodeModules
