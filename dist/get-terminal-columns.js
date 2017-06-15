"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get columns of current terminal
 * @returns {number} columns
 */

var getTerminalColumns = function getTerminalColumns() {
  return process.stdout.columns;
};

exports.default = getTerminalColumns;