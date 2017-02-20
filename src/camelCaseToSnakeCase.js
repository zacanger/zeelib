const camelCaseToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (match) =>
    '_' + match.toLowerCase()).toLowerCase()

export default camelCaseToSnakeCase
