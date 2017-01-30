import zipWith from './zipWith'
import invoke from './invoke'

const zipThen = (after, xs) =>
  (...list) =>
    after.apply(after, zipWith(invoke, xs, list))

export default zipThen
