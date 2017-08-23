/* eslint-disable no-mixed-operators */

// @flow

const ago = (d: Date): string => {
  console.error('`ago` is deprecated. Use a proper lib for this.')
  const diff = (((new Date()).getTime() - d.getTime()) / 1000)
  const dayDiff = Math.floor(diff / 86400)
  return dayDiff === 0 && (
    diff < 60 && 'just now' ||
    diff < 120 && '1 minute ago' ||
    diff < 3600 && `${Math.floor(diff / 60)} minutes ago` ||
    diff < 7200 && '1 hour ago' ||
    diff < 86400 && `${Math.floor(diff / 3600)} hours ago`
  ) ||
    dayDiff === 1 && 'Yesterday' ||
    dayDiff < 7 && `${dayDiff} days ago` ||
    dayDiff < 365 && `${Math.ceil(dayDiff / 7)} weeks ago` ||
    `${(dayDiff / 365).toFixed(2)} years ago`
}

export default ago
