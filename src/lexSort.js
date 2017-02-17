const lexSort = (a, b) =>
  a === b
    ? 0
    : a > b
      ? 1
      : -1

export default lexSort
