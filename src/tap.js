// @flow

const tap = (msg: string) => (a: any) : any => {
  console.log(msg, a)
  return a
}

export default tap
