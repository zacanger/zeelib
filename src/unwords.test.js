import test from 'tape'
import unwords from './unwords'

test('unwords', (t) => {
  t.plan(1)
  t.equal(unwords([ 'foo', 'bar' ]), 'foo bar', 'makes string joined with space')
})
