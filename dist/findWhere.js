"use strict";Object.defineProperty(exports,"__esModule",{value:true});// credit: gh:spicydonuts
var findWhere=function findWhere(fn,array){var found=null;array.some(function(item,i){if(fn(item,i)){found=item;return true}return false});return found};exports.default=findWhere;