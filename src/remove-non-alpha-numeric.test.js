import test from 'tape'
import removeNonAlphaNumeric from './remove-non-alpha-numeric'

test('removeNonAlphaNumeric', (t) => {
  t.equal(
    removeNonAlphaNumeric('asdlfkjsdf92r 2\n239wjefs ff!!sdf'),
    'asdlfkjsdf92r 2239wjefs ffsdf',
    'works'
  )
  t.end()
})
