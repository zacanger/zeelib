import objectToString from './objectToString'

const isDomElement = (v) => objectToString.call(v).slice(8, 12) === 'HTML'

export default isDomElement
