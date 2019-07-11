import * as test from 'tape'
import getFileExt from './get-file-ext'

test('getFileExt', (t): void => {
  t.equal(getFileExt('foo.bar'), 'bar', 'gets file ext')
  t.equal(getFileExt('foo.bar.baz'), 'baz', 'works with more dots')
  t.equal(getFileExt('asdf'), '', 'returns empty string for no ext')
  t.end()
})
