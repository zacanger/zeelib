// @flow
import getIsNode from './getIsNode'

const dir = (obj: Object) : void =>
  getIsNode() ? console.dir(obj, { colors: true }) : console.log(obj)

export default dir
