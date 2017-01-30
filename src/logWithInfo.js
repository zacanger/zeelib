import { hostname } from 'os'

const withInfo = (str = '') => `${str}:${hostname()}:${process.pid}`
const logWithInfo = (str = '') => console.log(withInfo(str))
export default logWithInfo
