'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _getFunctionArguments=require('./getFunctionArguments');var _getFunctionArguments2=_interopRequireDefault(_getFunctionArguments);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}var curry=function curry(fn){var originalArguments=(0,_getFunctionArguments2.default)(fn)||[];var makeCurriedFunc=function makeCurriedFunc(){var givenArguments=arguments||[];if(givenArguments.length<originalArguments.length){return function(){for(var _len=arguments.length,rest=Array(_len),_key=0;_key<_len;_key++){rest[_key]=arguments[_key]}return makeCurriedFunc.apply(undefined,_toConsumableArray(givenArguments).concat(rest))}}else{return fn.apply(undefined,_toConsumableArray(givenArguments))}};return function(){return makeCurriedFunc.apply(undefined,arguments)}};exports.default=curry;