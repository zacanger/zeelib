"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var zip3=function(a,b,c){var d=[],e=b.length,f=c.length;for(var g in a){if(g>=e||g>=f)return d;d.push([a[g],b[g],c[g]])}return d};exports.default=zip3;