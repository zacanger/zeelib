// @flow

/**
 * Switch statements are annoying sometimes
 * Takes an object of conditions: functions, and a thing to switch on
 * credit: gh:egoist/switchy
 */

const noSwitch = (conds: Object = {}) => (c: any): any => {
  if (typeof conds[c] === 'function') {
    return conds[c]()
  } else if (typeof conds.default === 'function') {
    return conds.default()
  }
}

export default noSwitch
