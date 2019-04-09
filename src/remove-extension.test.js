// @flow

import test from 'tape'
import removeExtension from './remove-extension'

test('removeExtension', (t): void => {
  t.equal(
    removeExtension('.foo.bar'),
    '.foo.bar',
    'hidden file with dots'
  )

  t.equal(
    removeExtension('foo.bar'),
    'foo',
    'regular file'
  )

  t.equal(
    removeExtension('foo.bar.baz'),
    'foo.bar',
    'regular file with multiple dots'
  )

  t.equal(
    removeExtension('.foo'),
    '.foo',
    'hidden file with no dots'
  )

  t.end()
})
