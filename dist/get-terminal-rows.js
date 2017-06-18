"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get current terminal rows
 * @returns {number} rows
 * @example
 * getTerminalRows()
 */

var getTerminalRows = function getTerminalRows() {
  return process.stdout.rows;
};

exports.default = getTerminalRows;