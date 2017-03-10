// @flow

const camelCaseToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (match) =>
    '_' + match.toLowerCase()).toLowerCase()

export default camelCaseToSnakeCase
