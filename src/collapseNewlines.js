// @flow

// collapses multiple newlines to two

const collapseNewlines = (s: string): string =>
  s.replace(/\n\s*\n/g, '\n\n')

export default collapseNewlines
