"use strict";Object.defineProperty(exports,"__esModule",{value:true});// from MDN's parseFloat docs
var filterFloat=function filterFloat(value){if(/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)){return Number(value)}return NaN};exports.default=filterFloat;