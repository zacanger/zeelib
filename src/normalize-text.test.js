import test from 'tape'
import normalizeText from './normalize-text'

test('normalizeText', (t) => {
  t.equal(normalizeText('Asdf 0  0----'), 'asdf 0 0', 'works')
  t.end()
})
