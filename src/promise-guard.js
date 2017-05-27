/**
 * Will reject if condition is false
 * @param {any} cond
 * @param {Error} err
 * @returns {Promise}
 */

const promiseGuard = (
  cond,
  err = new Error(`${cond} was false`)
) =>
  Promise[cond() ? 'resolve' : 'reject'](err)

export default promiseGuard
