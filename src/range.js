/**
 * Range function. Takes a start and and end,
 * and a step (defaults to 1). Works for numbers and
 * latin characters. This is _inclusive_. That is:
 * 1..10,2 == 0,2,4,6,8,10
 */

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
