// @flow

import { parse } from 'path'

const getBasename = (s: string): string =>
  parse(s).base

export default getBasename
