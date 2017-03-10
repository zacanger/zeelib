// @flow

const getLengthOfElements = (i: string, c: ?bool): number =>
  document &&
    c
      ? document.getElementsByClassName(i).length
      : document.getElementsByTagName(i).length

export default getLengthOfElements
