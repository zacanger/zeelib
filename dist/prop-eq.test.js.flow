import test from 'tape'
import propEq from './prop-eq'

test('propEq', (t) => {
  t.true(propEq('a', 1, { a: 1 }), 'returns true')
  t.false(propEq('a', 2, { a: 1 }), 'returns false')
  t.end()
})
