const promiseGuard = (
  cond,
  err = new Error(`${cond} was false`)
) => {
  console.error('`promiseGuard` is deprecated.')
  return Promise[cond() ? 'resolve' : 'reject'](err)
}

export default promiseGuard
