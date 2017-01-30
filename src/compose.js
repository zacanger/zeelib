import pipe from './pipe'
import reverse from './reverse'

// r->l composition
const compose = (...fns) => pipe(...reverse(fns))
export default compose
