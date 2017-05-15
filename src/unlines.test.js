import test from 'tape'
import unlines from './unlines'

test('unlines', (t) => {
  t.equal(unlines([ 'foo', 'bar' ]), 'foo\nbar', 'makes string joined with newline')
  t.end()
})
