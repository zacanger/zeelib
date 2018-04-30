// @flow

import test from 'tape'
import removeSubdomain from './remove-subdomain'

test('removeSubdomain', (t): void => {
  t.equal(removeSubdomain('foo.me.bar.baz'), 'me.bar.baz', 'removes subdomain')
  t.equal(removeSubdomain('foo.bar.baz'), 'bar.baz', 'removes one level')
  t.equal(removeSubdomain('foo.bar'), 'foo.bar', 'does not remove just domain')
  t.end()
})
