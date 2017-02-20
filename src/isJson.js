// @flow

const isJson = (str: string) : bool => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export default isJson
