const range = (a, b, step = 1) => {
  let arr = []

  if (typeof a === 'number') {
    arr[0] = a
    while (a + step <= b) {
      arr[arr.length] = a += step
    }
  } else { // TODO one day: unicode, maybe
    let s = 'abcdefghijklmnopqrstuvwxyz'

    if (a === a.toUpperCase() || b === b.toUpperCase()) {
      b = b.toUpperCase()
      s = s.toUpperCase()
    }

    s = s.substring(s.indexOf(a), s.indexOf(b) + 1)
    arr = s.split('')
  }

  return arr
}

export default range

// this is _inclusive_, eg 1..10,2 == 0,2,4,6,8,10
// usage:
// range(1, 10, 2)
// range('q, w')
