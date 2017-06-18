import test from 'tape'
import inlineString from './inline-string'

test('inlineString', (t) => {
  t.equal(inlineString('asdfasdf \n\n asdfasdf'), 'asdfasdf asdfasdf', 'works')
  t.end()
})
