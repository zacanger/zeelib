// @flow

import { relative } from 'path'

const getRelativePath = (here: string, there: string): string =>
  relative(here, there)

export default getRelativePath
