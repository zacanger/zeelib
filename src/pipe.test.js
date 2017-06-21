import test from 'tape'
import pipe from './pipe'

test('pipe', (t) => {
  const addOne = (a) => a + 1
  const timesTwo = (a) => a * 2
  t.equal(pipe(addOne, timesTwo)(2), 6, 'works')
  t.end()
})
