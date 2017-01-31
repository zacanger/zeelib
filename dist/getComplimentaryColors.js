'use strict';Object.defineProperty(exports,'__esModule',{value:true});// takes input in format #rrggbb (hex)
var getComplimentaryColors=function getComplimentaryColors(s){return'#'+(1e5+(Math.pow(8,8)+~('0x'+s.slice(1))).toString(16)).slice(-6)};// or
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))
exports.default=getComplimentaryColors;