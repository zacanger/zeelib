// @flow

const timeTest = (n: any, cb : any) : any => {
  console.time('time')
  const r = cb(n)
  console.timeEnd('time')
  return r
}

export default timeTest
