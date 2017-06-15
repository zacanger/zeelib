'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Format ms into human-readable time
 */

var formatMs = function formatMs(ms /*: number*/) /*: string*/ {
  var hr = 3600000;
  var min = 60000;
  var sec = 1000;

  var hours = Math.floor(ms / hr);
  var minutes = Math.floor((ms - hours * hr) / min);
  var seconds = Math.round((ms - hours * hr - minutes * min) / sec);

  if (hours && minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  var str = minutes + ':' + seconds;
  if (hours) str = hours + ':' + str;

  return str;
};

exports.default = formatMs;