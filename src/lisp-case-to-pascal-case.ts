/**
 * From lisp-case to PascalCase
 * @example
 * lispCaseToPascalCase('foo-bar') // => 'FooBar'
 */

export const lispCaseToPascalCase = (str: string): string => {
  const c = str.toLowerCase().replace(/-[a-z]/g, (m) =>
    m.slice(1).toUpperCase())
  return c.charAt(0).toUpperCase() + c.slice(1)
}
