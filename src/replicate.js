const replicate = (i, e) => {
  const a = []
  for (let x = 0; x < i; x++) {
    a.push(e)
  }
  return a
}

export default replicate
