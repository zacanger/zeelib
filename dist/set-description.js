'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setAttribute = require('./set-attribute');

var _setAttribute2 = _interopRequireDefault(_setAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets meta description
 * @example
 * setDescription('Best site 13/10 would visit')
 */

var setDescription = function setDescription(s) {
  var meta = document.head && document.head.querySelector('meta[name=description]');
  if (meta) {
    (0, _setAttribute2.default)(meta, 'content', s);
  }
};

exports.default = setDescription;