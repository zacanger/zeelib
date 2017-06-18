import test from 'tape'
import addNewlines from './add-newlines'

test('addNewlines', (t) => {
  t.equal(addNewlines('asdf asdf'), 'asdf asdf\n', 'adds newlines')
  t.end()
})
