// @flow

const GROUP_SHIFT = '   '
let groupPrefix = ''

const consoleGroupEnd = (): void => {
  if (console.groupEnd) {
    console.groupEnd()
  } else {
    groupPrefix = groupPrefix.substr(0, groupPrefix.length - GROUP_SHIFT.length)
  }
}

export default consoleGroupEnd
