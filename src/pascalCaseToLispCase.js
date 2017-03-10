// @flow

const pascalCaseToLispCase = (s: string): string =>
  s.charAt(0).toLowerCase() + '-' + s.slice(1).replace(/[A-Z]/g, (m) =>
    '-' + m.toLowerCase()).toLowerCase()

export default pascalCaseToLispCase
