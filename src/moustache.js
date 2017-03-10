// @flow

const moustache = (template: string, replacements: Object, syntax: RegExp): string => {
  const ms = /\{\{(\w+)\}\}/g
  const f = (m, p) => p in replacements ? replacements[p] : ''
  return template.replace(syntax || ms, f)
}

export default moustache
