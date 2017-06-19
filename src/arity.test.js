import test from 'tape'
import arity from './arity'
import noop from './noop'
import sum from './sum'

test('arity', (t) => {
  const addTwo = (a, b) => sum([ a, b ])
  const addFour = (a, b, c, d) => sum([ a, b, c, d ])
  t.equal(arity(noop), 0, 'works for none')
  t.equal(arity(addTwo), 2, 'works for 2')
  t.equal(arity(addFour), 4, 'works for 4')
  t.end()
})
