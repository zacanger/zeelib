// @flow

import { parse } from 'path'

const getBasename = (s: string): string =>
  parse(s).ext || ''

export default getBasename
