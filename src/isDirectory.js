// @flow

import { statSync } from 'fs'

const isDirectory = (a: string): bool =>
  statSync(a).isDirectory()

export default isDirectory
