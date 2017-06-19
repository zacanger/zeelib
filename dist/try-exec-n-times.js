'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

function tryExecNTimes(funcToRetry /*: () => any*/, retriesLeft /*: number*/, onEveryError /*: ?() => any*/) /*: any*/ {
  console.error('`tryExecNTimes` is deprecated.');
  var exitCode = funcToRetry();
  if (exitCode === 0) {
    return exitCode;
  } else {
    if (onEveryError) {
      onEveryError();
    }
    retriesLeft--;
    console.log('Command failed, ' + retriesLeft + ' retries left');
    if (retriesLeft === 0) {
      return exitCode;
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError);
    }
  }
}

exports.default = tryExecNTimes;