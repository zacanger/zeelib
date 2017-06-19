import test from 'tape'
import objectToString from './object-to-string'

test('objectToString', (t) => {
  t.equal(objectToString({}), '[object Object]', 'works')
  t.end()
})
