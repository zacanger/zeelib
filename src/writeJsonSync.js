// @flow

import { writeFileSync } from 'fs'

const writeJsonSync = (file: string, data: any, indent: ?number) : void => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

export default writeJsonSync
