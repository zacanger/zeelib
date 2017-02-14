import test from 'tape'
import randomColor from './randomColor'
import isHexBased from './isHexBased'

test('randomColor', (t) => {
  t.plan(1)
  t.true(isHexBased(randomColor()), 'is a valid hex')
})
