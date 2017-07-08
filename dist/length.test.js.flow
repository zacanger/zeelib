import test from 'tape'
import length from './length'

test('length', (t) => {
  t.equal(length('foo'), 3, 'works for strings')
  t.equal(length([ 1, 2 ]), 2, 'works for arrays')
  t.equal(length(new Set([ 1, 2, 3 ])), 3, 'works for sets')
  t.equal(length(new Map([ [ 1, 2 ] ])), 1, 'works for maps')
  t.equal(length({ a: 'a' }), 1, 'works for objects')
  t.end()
})
