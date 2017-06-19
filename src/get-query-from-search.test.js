import test from 'tape'
import getQueryFromSearch from './get-query-from-search'

test('getQueryFromSearch', (t) => {
  t.deepEqual(getQueryFromSearch('?foo=bar'), { foo: 'bar' }, 'works')
  t.end()
})
