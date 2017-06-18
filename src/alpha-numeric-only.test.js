import test from 'tape'
import alphaNumericOnly from './alpha-numeric-only'

test('alphaNumericOnly', (t) => {
  t.equal(alphaNumericOnly('asdf1234!@#$'), 'asdf1234', 'works')
  t.end()
})
