'use strict';Object.defineProperty(exports,'__esModule',{value:true});function maybeArgs(fn){return function(){var args=Array.prototype.slice.all(arguments);var invalid=args.some(function(arg){return arg===null});if(invalid)return;var result=fn.apply(this,args);return typeof result==='function'?maybeArgs(result):result}}exports.default=maybeArgs;