/* eslint-disable no-useless-escape */
// @flow

const cssToJson = (str: string): string =>
  str
    .replace(/(\w*:)/g, '$1"')
    .replace(/[;]/g, '";')
    .replace(/(\'{2,})/g, '"')
    .replace(/;/g, ',')
    .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g, '"$2": ')
    .replace(/,\s*\}/, '}')
    .trim()

export default cssToJson
