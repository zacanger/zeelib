import test from 'tape'
import unless from './unless'

test('unless', (t) => {
  t.true(unless(() => true, false), 'returns fn for false')
  t.false(unless(() => true, true), 'returns null for true')
  t.end()
})
