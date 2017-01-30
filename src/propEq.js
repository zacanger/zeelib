import curry from './curry'

// returns true if current obj has prop that equals given val
const propEq = curry((prop, value, data) =>
  data[prop] !== undefined && data[prop] === value)

export default propEq
