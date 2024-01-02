import { existsSync } from 'node:fs'
import { resolve, join } from 'node:path'

/**
 * Get project root
 * @example
 * getProjectRoot() // /path/to/project
 */

export const getProjectRoot = (): string => {
  const mainFileName = require.main ? require.main.filename : __dirname

  if (mainFileName.indexOf('node_modules') > 0) {
    return mainFileName.split('/node_modules')[0]
  }

  let currentPath: string = join(mainFileName, '../')
  let result = ''

  while (currentPath !== '/') {
    if (existsSync(currentPath + '/package.json')) {
      result = currentPath
      break
    }

    currentPath = resolve(currentPath, '../')
  }

  return result
}
