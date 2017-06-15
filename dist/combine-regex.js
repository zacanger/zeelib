'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Takes a list of regular expressions and returns a single regular expression
 * [RegExp] -> RegEx
 * @param {array} rs List of RegExp
 * @param {string} opts string of regex opts
 * @returns {RegExp}
 */

var combineRegex = function combineRegex(rs, opts) {
  return new RegExp(rs.map(function (r) {
    return r.source;
  }).join(''), opts);
};

exports.default = combineRegex;