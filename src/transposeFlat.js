// @flow

// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
const transposeFlat = (m: any[], l: number = Math.sqrt(m.length) | 0): any[] =>
  m.map((c, i) =>
    m[(i % l) * l + i / l | 0])

export default transposeFlat
