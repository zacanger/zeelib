'use strict';Object.defineProperty(exports,'__esModule',{value:true});function toType(val){var argLen=arguments.length;if(argLen!==1){throw new Error('Please only pass one argument')}return{}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}exports.default=toType;