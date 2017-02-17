import takeWhile from './takeWhile'

const span = (pred, a) => {
  const sat = takeWhile(pred, a)
  return [ sat, a.slice(sat.length) ]
}

export default span
