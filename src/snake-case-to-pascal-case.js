// @flow

/**
 * snake_case to PascalCase
 * @example
 * snakeCaseToPascalCase('foo_bar') // => 'FooBar'
 */

const snakeCaseToPascalCase = (str: string): string => {
  const c = str.toLowerCase().replace(/_[a-z]/g, (m) =>
    m.slice(1).toUpperCase())
  return c.charAt(0).toUpperCase() + c.slice(1)
}

export default snakeCaseToPascalCase
