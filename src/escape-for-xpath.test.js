import test from 'tape'
import escapeForXpath from './escape-for-xpath'

test('escapeForXpath', (t) => {
  t.equal(escapeForXpath('asdf lask jf((slkfjf '), 'concat(\'asdf lask jf((slkfjf \')', 'works')
  t.end()
})
