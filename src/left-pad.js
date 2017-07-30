// @flow

/**
 * It's just left-pad
 *
 * Yes, really
 * @example
 * leftPad('asdf', 8) // => '    asdf'
 * leftPad('asdf', 8, 'z') // => 'zzzzasdf'
 */

const leftPad = (
  str: string,
  len: number,
  pd: string = ' '
): string =>
  Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str

export default leftPad
