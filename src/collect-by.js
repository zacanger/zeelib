// @flow

/**
 * Collect an an array of objects by string key
 * cred: gh:uniqname
 */

const collectBy = (p: string) =>
  (a: any[]): Object =>
    a.reduce((c, i) => ({
      ...c, [i[p]]: i
    }), {})

export default collectBy
