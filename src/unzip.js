const unzip = (a1) => {
  const a2 = []
  const a3 = []
  for (let i in a1) {
    a2.push(a1[i][0])
    a3.push(a1[i][1])
  }
  return [ a2, a3 ]
}

export default unzip
