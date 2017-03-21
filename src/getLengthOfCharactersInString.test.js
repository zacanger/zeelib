import test from 'tape'
import getLengthOfCharactersInString from './getLengthOfCharactersInString'

test('getLengthOfCharactersInString', (t) => {
  t.plan(1)
  t.equal(getLengthOfCharactersInString('foo', 'o'), 2, 'returns length of characters in string')
})
