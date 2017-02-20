// i know this is pointless but i think it's cute
const sleep = (ms) => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms) {}
}

export default sleep
