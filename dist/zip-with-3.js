"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var zipWith3=function(a,b,c,d){var e=[],f=c.length,g=d.length;for(var h in b){if(h>=f||h>=g)return e;e.push(a(b[h],c[h],d[h]))}return e};exports.default=zipWith3;