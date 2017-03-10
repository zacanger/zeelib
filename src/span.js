// @flow

import takeWhile from './takeWhile'

const span = (pred: bool, a: any): any[] => {
  const sat = takeWhile(pred, a)
  return [ sat, a.slice(sat.length) ]
}

export default span
