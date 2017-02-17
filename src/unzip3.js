const unzip3 = (a1) => {
  const a2 = []
  const a3 = []
  const a4 = []
  for (let i in a1) {
    a2.push(a1[i][0])
    a3.push(a1[i][1])
    a4.push(a1[i][2])
  }
  return [ a2, a3, a4 ]
}

export default unzip3
