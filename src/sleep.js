// @flow

// i know this is pointless but i think it's cute
const sleep = (ms: number): void => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

export default sleep
