import test from 'tape'
import calc from './calc'

test('calc', (t) => {
  const add = (a, b) => a + b
  const sub = (a, b) => a - b
  const div = (a, b) => a / b
  const mul = (a, b) => a * b
  t.equal(calc(add)(1, 1, 1, 1), 4, 'works for addition')
  t.equal(calc(sub)(3, 1, 1, 1), 0, 'works for subtraction')
  t.equal(calc(mul)(1, 1, 1, 1), 1, 'works for multiplication')
  t.equal(calc(div)(1, 1, 1, 1), 1, 'works for division')
  t.end()
})
