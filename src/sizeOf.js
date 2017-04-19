// @flow
// based on code by http://code.stephenmorley.org/ CC0 1.0 Universal

const sizeOf = (object: Object): number => {
  const objects = [ object ]
  let size = 0

  for (let index = 0; index < objects.length; index++) {
    switch (typeof objects[index]) {
      case 'boolean':
        size += 4
        break
      case 'number':
        size += 8
        break
      case 'string':
        size += 2 * objects[index].length
        break
      case 'object':
        if (!Array.isArray(objects[index])) {
          for (let key in objects[index]) {
            size += 2 * key.length
          }
        }

        for (let key in objects[index]) {
          let processed = false
          for (let search = 0; search < objects.length; search++) {
            if (objects[search] === objects[index][key]) {
              processed = true
              break
            }
          }

          if (!processed) {
            objects.push(objects[index][key])
          }
        }
    }
  }

  return size
}

export default sizeOf
