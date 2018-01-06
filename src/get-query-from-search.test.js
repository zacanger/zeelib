// @flow

import test from 'tape'
import getQueryFromSearch from './get-query-from-search'

test('getQueryFromSearch', (t): void => {
  t.deepEqual(getQueryFromSearch('?foo=bar'), { foo: 'bar' }, 'works')
  t.end()
})
