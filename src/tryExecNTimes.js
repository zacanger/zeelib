// @flow

// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left

function tryExecNTimes (
  funcToRetry: () => any,
  retriesLeft: number,
  onEveryError: ?() => any
): any {
  const exitCode = funcToRetry()
  if (exitCode === 0) {
    return exitCode
  } else {
    if (onEveryError) {
      onEveryError()
    }
    retriesLeft--
    console.log(`Command failed, ${retriesLeft} retries left`)
    if (retriesLeft === 0) {
      return exitCode
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError)
    }
  }
}

export default tryExecNTimes
