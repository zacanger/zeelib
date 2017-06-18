import test from 'tape'
import fixWindowsSlashes from './fix-windows-slashes'

test('fixWindowsSlashes', (t) => {
  t.equal(fixWindowsSlashes('C:\\Windows\\Something'), 'C:/Windows/Something', 'works')
  t.end()
})
