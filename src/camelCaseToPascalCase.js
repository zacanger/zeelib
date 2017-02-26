// @flow

const camelCaseToPascalCase = (s: string) : string =>
  s.charAt(0).toUpperCase() + s.slice(1)

export default camelCaseToPascalCase
