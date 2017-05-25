// @flow

const moustache = (
  template: string,
  replacements: Object,
  syntax: RegExp
): string => {
  console.error('`moustache` is deprecated. Please use template literals instead.')
  const ms = /\{\{(\w+)\}\}/g
  const f = (m, p) => p in replacements ? replacements[p] : ''
  return template.replace(syntax || ms, f)
}

export default moustache
