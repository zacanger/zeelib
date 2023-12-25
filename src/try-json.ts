import isJson from './is-json'

/*
 * Tries to parse JSON, if is JSON
 */

const tryJson = <T>(o: T): T | Record<string, any> => {
  const m = o as unknown as string
  if (isJson(m)) {
    return JSON.parse(m)
  }
  return o
}

export default tryJson
