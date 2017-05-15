import test from 'tape'
import removeNumeric from './removeNumeric'

test('removeNumeric', (t) => {
  t.equal(removeNumeric('123abc'), 'abc', 'removes numbers')
  t.end()
})
