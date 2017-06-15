"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns size of the current terminal
 * @returns {object} columns, rows
 */

var getTerminalSize = function getTerminalSize() {
  return {
    columns: process.stdout.columns,
    rows: process.stdout.rows
  };
};
exports.default = getTerminalSize;