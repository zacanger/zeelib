'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readline = require('readline');

/**
 * Create a simple y/n prompt for the terminal
 * Adapted from create-react-app's prompt
 * @example
 * prompt('Do the thing?') // with 'no' default
 * prompt('Do the thing?', true) // with 'yes' default
 */

var termPrompt = function termPrompt(question /*: string*/, isYesDefault /*: ?bool*/) {
  return new Promise(function (resolve) /*: ?bool*/ {
    var rlInterface = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });

    var hint = isYesDefault ? '[Y/n]' : '[y/N]';
    var message = question + ' ' + hint + '\n';

    rlInterface.question(message, function (answer) {
      rlInterface.close();

      var useDefault = answer.trim().length === 0;
      if (useDefault) return resolve(isYesDefault);

      var isYes = answer.match(/^(yes|y)$/i);
      return resolve(isYes);
    });
  });
}; // @flow

exports.default = termPrompt;