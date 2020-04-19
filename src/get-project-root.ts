import { existsSync } from 'fs'
import { resolve, join } from 'path'

/**
 * Get project root
 * @example
 * getProjectRoot() // /path/to/project
 */

const getProjectRoot = () => {
  const mainFileName = require.main ? require.main.filename : __dirname

  if (mainFileName.indexOf('node_modules') > 0) {
    return mainFileName.split('/node_modules')[0]
  }

  let currentPath: string = join(mainFileName, '../')
  let result = ''

  // eslint-disable-next-line fp/no-loops
  while (currentPath !== '/') {
    if (existsSync(currentPath + '/package.json')) {
      result = currentPath
      break
    }

    currentPath = resolve(currentPath, '../')
  }

  return result
}

export default getProjectRoot
