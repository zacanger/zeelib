const camelCaseToLispCase = (str) =>
  str.replace(/[A-Z]/g, (match) =>
    '-' + match.toLowerCase()).toLowerCase()

export default camelCaseToLispCase
