// @flow

import { lstatSync } from 'fs'

const isSymLink = (a: string): bool =>
  lstatSync(a).isSymbolicLink()

export default isSymLink
