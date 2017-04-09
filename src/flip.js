// @flow

const flip = (f: () => any): any =>
  (a: any) =>
    (b: any) =>
      f(b)(a)

export default flip
