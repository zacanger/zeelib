// @flow

const trimHash = (str: string): string =>
  typeof str === 'string' ? str.replace('#', '') : str

export default trimHash
