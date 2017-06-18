import test from 'tape'
import stripPunctuation from './strip-punctuation'

test('stripPunctuation', (t) => {
  t.equal(stripPunctuation('asdf. as.f.sdaf .'), 'asdf asfsdaf ', 'works')
  t.end()
})
