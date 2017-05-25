// @flow

/**
 * Find out how many of a matching element is on the page
 * If second param is truthy, will look by classname instead of tagname
 */

const getLengthOfElements = (element: string, useClassnames: ?bool): number =>
  document &&
    useClassnames
      ? document.getElementsByClassName(element).length
      : document.getElementsByTagName(element).length

export default getLengthOfElements
