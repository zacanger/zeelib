// @flow

/**
 * `fn -> a -> b -> fn b a`
 */

const flip = (f: () => any): any =>
  (a: any) =>
    (b: any) =>
      f(b)(a)

export default flip
