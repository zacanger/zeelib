import test from 'tape'
import noop from './noop'

test('noop', (t) => {
  t.equal(noop(), undefined, 'returns undefined with no args')
  t.equal(noop(1), undefined, 'returns undefined with args')
  t.end()
})
