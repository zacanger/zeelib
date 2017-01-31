'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _trimSpaces=require('./trimSpaces');var _trimSpaces2=_interopRequireDefault(_trimSpaces);var _isHexBased=require('./isHexBased');var _isHexBased2=_interopRequireDefault(_isHexBased);var _trimHash=require('./trimHash');var _trimHash2=_interopRequireDefault(_trimHash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// takes string color, returns either string or null
var normalizeColor=function normalizeColor(color){var nextColor=(0,_trimSpaces2.default)(color);if(!(0,_isHexBased2.default)(color)){return null}nextColor=(0,_trimHash2.default)(nextColor);if(nextColor.length===3){nextColor=nextColor.replace(/./g,function(d){return d+d})}return nextColor.toUpperCase()};exports.default=normalizeColor;