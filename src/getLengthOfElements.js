// @flow

/**
 * Find out how many of a matching element is on the page
 * If second param is truthy, will look by classname instead of tagname
 */

const getLengthOfElements = (i: string, c: ?bool): number =>
  document &&
    c
      ? document.getElementsByClassName(i).length
      : document.getElementsByTagName(i).length

export default getLengthOfElements
