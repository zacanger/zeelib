// @flow

const transposeFlat = (
  matr: any[],
  l: number = Math.sqrt(matr.length) | 0
): any[] => {
  console.error('`transposeFlat` is deprecated.')
  return matr.map((c, i) =>
    matr[(i % l) * l + i / l | 0])
}

export default transposeFlat
