import test from 'tape'
import curry from './curry'

test('curry', (t) => {
  const a2 = (a, b) => a + b
  const a4 = (a, b, c, d) => a + b + c + d
  const ca2 = curry(a2)
  const ca4 = curry(a4)

  t.equal(ca2(1, 1), 2, 'works when called non-curried with 2 args')
  t.equal(ca2(1)(1), 2, 'works when called curried with 2 args')
  t.equal(ca4(1, 1, 1, 1), 4, 'works when called non-curried with 4 args')
  t.equal(ca4(1, 1)(1)(1), 4, 'works when called curried with some args')
  t.equal(ca4(1)(1)(1)(1), 4, 'works when called curried with 4 args')

  t.end()
})
