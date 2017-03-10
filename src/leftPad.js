// @flow

// yes, really

const leftPad = (str: string, len: number, pd: string = ' '): string =>
  Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str

export default leftPad
