import reduce from './reduce'

// l->r composition
const pipe = (...fns) => data => reduce((v, fn) => fn(v), data)(fns)
export default pipe
