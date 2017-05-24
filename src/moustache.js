// @flow

/**
 * Simple handlebars/mustache-like string util
 * Takes the template, the replacements (as an object),
 * and an optional syntax (defaults to `{{}}`)
 */

const moustache = (
  template: string,
  replacements: Object,
  syntax: RegExp
): string => {
  const ms = /\{\{(\w+)\}\}/g
  const f = (m, p) => p in replacements ? replacements[p] : ''
  return template.replace(syntax || ms, f)
}

export default moustache
