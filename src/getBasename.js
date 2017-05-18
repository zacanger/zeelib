// @flow

import { parse } from 'path'

/*
 * `basename` for Node
 */

const getBasename = (s: string): string =>
  parse(s).base

export default getBasename
