'use strict';Object.defineProperty(exports,'__esModule',{value:true});var splitStringOn=function splitStringOn(str,spl){if(!str||typeof str!=='string'){console.warn('Please pass a string as first param.')}spl=spl||'';var idx=str.indexOf(spl);return idx===-1?null:[str.substr(0,idx),str.substr(idx+spl.length)]};exports.default=splitStringOn;