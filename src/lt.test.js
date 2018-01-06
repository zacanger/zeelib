import test from 'tape'
import lt from './lt'

test('lt', (t): void => {
  t.false(lt(2, 1), 'returns false for 2 and 1')
  t.true(lt(1.1, 1.9), 'returns true for 1.1 and 1.9')
  t.end()
})
