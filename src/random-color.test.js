import test from 'tape'
import randomColor from './random-color'
import isHexBased from './is-hex-based'

test('randomColor', (t) => {
  t.true(isHexBased(randomColor()), 'is a valid hex')
  t.end()
})
