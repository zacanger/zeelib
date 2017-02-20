// credit: gh:egoist/switchy
const noSwitch = (conds = {}) => (c) => {
  if (typeof conds[c] === 'function') {
    return conds[c]()
  } else if (typeof conds.default === 'function') {
    return conds.default()
  }
}

export default noSwitch
