import * as test from 'tape'
import basename from './basename'

test('basename', (t): void => {
  t.equal(basename('foo/bar'), 'bar', 'works')
  t.end()
})
