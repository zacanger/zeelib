import test from 'tape'
import flatMap from './flat-map'

test('flatMap', (t) => {
  const ns = [
    { name: 'Zacary', nicks: [ 'Zac', 'Zac Anger' ] },
    { name: 'Foo', nicks: [ 'Baz', 'Bar' ] }
  ]
  const f = (a) => [a.name].concat(a.nicks)
  const e = [ 'Zacary', 'Zac', 'Zac Anger', 'Foo', 'Baz', 'Bar' ]

  t.deepEqual(flatMap(f, ns), e, 'works')
  t.end()
})
