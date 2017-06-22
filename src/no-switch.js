const noSwitch = (conds) => (c) => {
  console.error('`noSwitch` is deprecated. Please use the `switchy` lib.')
  if (typeof conds[c] === 'function') {
    return conds[c]()
  } else if (typeof conds.default === 'function') {
    return conds.default()
  }
}

export default noSwitch
