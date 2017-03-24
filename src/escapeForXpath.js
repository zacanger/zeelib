const escapeForXpath = (s) => {
  let parts = s.match(/[^'"]+|['"]/g)
  parts = parts.map((part) => {
    if (part === "'") {
      return '"\'"'
    }

    if (part === '"') {
      return "'\"'"
    }

    return `'${part}'`
  })

  return 'concat(' + parts.join(',') + ')'
}

export default escapeForXpath
