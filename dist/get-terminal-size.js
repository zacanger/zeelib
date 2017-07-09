"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getTerminalSize = function getTerminalSize() {
  return {
    columns: process.stdout.columns,
    rows: process.stdout.rows
  };
};
exports.default = getTerminalSize;