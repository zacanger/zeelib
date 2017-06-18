import test from 'tape'
import addCommasToNumber from './add-commas-to-number'

test('addCommasToNumber', (t) => {
  t.equal(addCommasToNumber(1000000), '1,000,000', 'adds commas to number')
  t.end()
})
