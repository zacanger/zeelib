// @flow

import { parse } from 'path'

/*
 * `basename` for Node
 */

const getBasename = (str: string): string =>
  parse(str).base

export default getBasename
