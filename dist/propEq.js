'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _curry=require('./curry');var _curry2=_interopRequireDefault(_curry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// returns true if current obj has prop that equals given val
var propEq=(0,_curry2.default)(function(prop,value,data){return data[prop]!==undefined&&data[prop]===value});exports.default=propEq;