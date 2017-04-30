// @flow

import { resolve } from 'path'

const resolveFiles = (l: string[]): string[] =>
  l.map((e) => resolve(e))

export default resolveFiles
