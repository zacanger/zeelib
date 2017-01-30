// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
const transposeFlat = (m, l = Math.sqrt(m.length) | 0) =>
  m.map((c, i) =>
    m[(i % l) * l + i / l | 0])

export default transposeFlat
