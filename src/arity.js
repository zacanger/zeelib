// @flow

const arity = (f: (any) => any): number => {
  console.error('`arity` is deprecated. Please use `length` instead.')
  return f.length
}

export default arity
