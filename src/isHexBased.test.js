import test from 'tape'
import isHexBased from './isHexBased'
import randomColor from './randomColor'

test('isHexBased', (t) => {
  t.true(isHexBased(randomColor()), 'returns true for valid hex')
  t.true(isHexBased('#333'), 'returns true for short hex')
  t.false(isHexBased('1'), 'returns false for 1')
  t.end()
})
