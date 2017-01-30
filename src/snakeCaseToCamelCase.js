const snakeCaseToCamelCase = str =>
  str.replace(/(_\w)/g, match =>
    match[1].toUpperCase())
export default snakeCaseToCamelCase
