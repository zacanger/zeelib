// @flow

const getRandomString = (n: number = 8): string =>
  Math.random().toString(36).substring(n)

export default getRandomString
