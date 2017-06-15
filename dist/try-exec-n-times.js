"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Run fn n times
 * Adapted from facebook utility scripts
 * Return 0 on success
 * Return code of last failed if no more tries left
 */

function tryExecNTimes(funcToRetry /*: () => any*/, retriesLeft /*: number*/, onEveryError /*: ?() => any*/) /*: any*/ {
  var exitCode = funcToRetry();
  if (exitCode === 0) {
    return exitCode;
  } else {
    if (onEveryError) {
      onEveryError();
    }
    retriesLeft--;
    console.log("Command failed, " + retriesLeft + " retries left");
    if (retriesLeft === 0) {
      return exitCode;
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError);
    }
  }
}

exports.default = tryExecNTimes;