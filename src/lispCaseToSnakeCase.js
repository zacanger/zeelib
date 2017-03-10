// @flow

const lispCaseToSnakeCase = (s: string): string =>
  s.replace(/-/g, '_')

export default lispCaseToSnakeCase
