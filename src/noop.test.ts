import * as test from 'tape'
import noop from './noop'

test('noop', (t): void => {
  t.equal(noop(), undefined, 'returns undefined')
  t.end()
})
