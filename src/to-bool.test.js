import test from 'tape'
import toBool from './to-bool'

test('toBool', (t) => {
  t.equal(toBool(1), true, 'works')
  t.end()
})
