"use strict";Object.defineProperty(exports,"__esModule",{value:true});var isJson=function isJson(str){try{JSON.parse(str)}catch(e){return false}return true};exports.default=isJson;