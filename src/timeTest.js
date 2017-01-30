const timeTest = (n, cb) => {
  console.time('time')
  const r = cb(n)
  console.timeEnd('time')
  return r
}

export default timeTest
