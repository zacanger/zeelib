"use strict";Object.defineProperty(exports,"__esModule",{value:true});var getNiceDate=function getNiceDate(){return"["+Date(Date.now()*1000).match(/(\d{2}:\d{2}:\d{2})/)[1]+"]"};exports.default=getNiceDate;