import { readFileSync } from 'fs'

const readJsonSync = file => JSON.parse(readFileSync(file, 'utf8'))
export default readJsonSync
