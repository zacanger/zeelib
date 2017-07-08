import test from 'tape'
import removeSubdomain from './remove-subdomain'

test('removeSubdomain', (t) => {
  t.equal(removeSubdomain('foo.me.bar.baz'), 'me.bar.baz', 'removes subdomain')
  t.equal(removeSubdomain('foo.bar'), 'foo.bar', 'does not remove just domain')
  t.end()
})
