// @flow

const snakeCaseToLispCase = (s: string) : string =>
  s.replace(/_/g, '-')

export default snakeCaseToLispCase
