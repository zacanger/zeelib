const chunk = (arr, n) => {
  if (!arr.length || !n) return []
  return [ arr.slice(0, n) ].concat(chunk(arr.slice(n), n))
}

export default chunk
