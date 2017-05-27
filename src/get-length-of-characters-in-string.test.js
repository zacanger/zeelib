import test from 'tape'
import getLengthOfCharactersInString from './get-length-of-characters-in-string'

test('getLengthOfCharactersInString', (t) => {
  t.equal(getLengthOfCharactersInString('foo', 'o'), 2, 'returns length of characters in string')
  t.end()
})
