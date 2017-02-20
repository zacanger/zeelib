const lispCaseToCamelCase = (str) =>
  str.toLowerCase().replace(/-[a-z]/g, (match) =>
    match.slice(1).toUpperCase())

export default lispCaseToCamelCase
