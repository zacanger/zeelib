"use strict";Object.defineProperty(exports,"__esModule",{value:true});// credit: gh:spicydonuts
var dropWhere=function dropWhere(fn,array){var keepers=[];array.forEach(function(item,i){if(!fn(item,i)){keepers.push(item)}});if(array.length===keepers.length){return array}return keepers};exports.default=dropWhere;