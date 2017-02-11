import hex from './hexRegex'

const isHexBased = color => hex.test(color)
export default isHexBased
