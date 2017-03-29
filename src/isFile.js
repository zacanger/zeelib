// @flow

import { statSync } from 'fs'

const isFile = (a: string): bool =>
  statSync(a).isFile()

export default isFile
