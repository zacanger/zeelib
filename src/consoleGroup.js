// @flow

const GROUP_SHIFT = '   '
const GROUP_ARROW = '▼'
let groupPrefix = ''

const consoleGroup = (...args: any): void => {
  if (console.group) {
    console.log(...args)
  } else {
    console.log('')
    console.log(groupPrefix + GROUP_ARROW, ...args)
    groupPrefix += GROUP_SHIFT
  }
}

export default consoleGroup
