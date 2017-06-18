// @flow

/**
 * Escapes a string for use in XPath
 * @example
 * escapeForXpath('asdf lask jf((slkfjf ') // => 'concat(\'asdf lask jf((slkfjf \')'
 */

const escapeForXpath = (str: string): ?string => {
  let parts = str.match(/[^'"]+|['"]/g)
  if (parts) {
    parts = parts.map((part) => {
      if (part === "'") {
        return '"\'"'
      }

      if (part === '"') {
        return "'\"'"
      }

      return `'${part}'`
    })

    return 'concat(' + parts.join(',') + ')'
  }
}

export default escapeForXpath
