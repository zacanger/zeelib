// @flow

const lispCaseToPascalCase = (s: string): string => {
  const c = s.toLowerCase().replace(/-[a-z]/g, (m) =>
    m.slice(1).toUpperCase())
  return c.charAt(0).toUpperCase() + c.slice(1)
}

export default lispCaseToPascalCase
