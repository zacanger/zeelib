import test from 'tape'
import leftPad from './left-pad'

test('leftPad', (t) => {
  t.equal(leftPad('asdf', 8), '    asdf', 'works')
  t.equal(leftPad('asdf', 8, 'z'), 'zzzzasdf', 'works with supplied pad')
  t.end()
})
