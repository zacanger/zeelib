// @flow

const consoleClear = (): void =>
  typeof console.clear === 'function'
    ? console.clear()
    : console.log('\x1Bc')

export default consoleClear
