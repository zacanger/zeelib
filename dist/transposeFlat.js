"use strict";Object.defineProperty(exports,"__esModule",{value:true});// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
var transposeFlat=function transposeFlat(m){var l=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Math.sqrt(m.length)|0;return m.map(function(c,i){return m[i%l*l+i/l|0]})};exports.default=transposeFlat;