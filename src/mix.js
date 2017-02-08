import each from './each'

function mix () {
  const mixed = {}
  each(arguments, (obj) => {
    each(obj, (item, index) => {
      mixed[index] = item
    })
  })
  return mixed
}

export default mix
