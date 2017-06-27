import test from 'tape'
import unless from './unless'

test('unless', (t) => {
  t.true(unless(false, () => true), 'returns fn for false')
  t.false(unless(true, () => true), 'returns null for true')
  t.end()
})
