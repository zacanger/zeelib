import test from 'tape'
import escapeHtml from './escape-html'

test('escapeHtml', (t) => {
  t.equal(escapeHtml('<span>"&</span>\''), '&lt;span&gt;&quot;&amp;&lt;/span&gt;&#39;', 'works')
  t.end()
})
