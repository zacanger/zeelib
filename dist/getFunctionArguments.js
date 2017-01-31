'use strict';Object.defineProperty(exports,'__esModule',{value:true});var getFunctionArguments=function getFunctionArguments(fn){if(typeof fn!=='function'){throw new Error('Not a function')}var functionAsString=fn.toString();var args=functionAsString.match(/\(.*?\)/)[0]// match everything between brackets
.replace(/[()]/gi,'')// remove brackets
.replace(/\s/gi,'')// remove all whitespace
.split(',');// split on the commas
return args.filter(function(x){return x});// remove possible empty string from the result
};exports.default=getFunctionArguments;