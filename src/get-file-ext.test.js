import test from 'tape'
import getFileExt from './get-file-ext'

test('getFileExt', (t) => {
  t.equal(getFileExt('foo.bar'), 'bar', 'gets file ext')
  t.equal(getFileExt('foo.bar.baz'), 'baz', 'works with more dots')
  t.end()
})
