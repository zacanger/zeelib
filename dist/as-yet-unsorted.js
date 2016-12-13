'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.tryExecNTimes=tryExecNTimes;exports.logWithTimestamp=logWithTimestamp;exports.maybeArgs=maybeArgs;function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}// gh:artificerentertainment
var nco=exports.nco=function nco(variable,defaultValue){return variable===null||typeof variable==='undefined'?defaultValue:variable};var niceDate=exports.niceDate='['+Date(Date.now()*1000).match(/(\d{2}:\d{2}:\d{2})/)[1]+']';// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left
function tryExecNTimes(funcToRetry,retriesLeft,onEveryError){var exitCode=funcToRetry();if(exitCode===0){return exitCode}else{if(onEveryError){onEveryError()}retriesLeft--;console.log('Command failed, '+retriesLeft+' retries left');if(retriesLeft===0){return exitCode}else{return tryExecNTimes(funcToRetry,retriesLeft,onEveryError)}}}// i know this is pointless but i think it's cute
var sleep=exports.sleep=function sleep(ms){var start=new Date().getTime();while(new Date().getTime()-start<ms){}};// logging things
var throwErr=exports.throwErr=function throwErr(err){throw new Error(err)};function logWithTimestamp(){var date=new Date;var timestamp=date.getDate()+'/'+date.getMonth()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'.'+date.getMilliseconds();var message=Array.prototype.slice.call(arguments);message.unshift('--');message.unshift(timestamp);console.log.apply(console,message)}// invokes until function returns truthily
// examples:
// Succeeds after 15 calls
// let i = 0
// invoker(20, 100)(() => {
// console.log(i)
// return ++i > 15
// }, console.log)
// Fails after 20 calls
// let ii = 0
// invoker(20, 100)(() => {
// console.log(ii)
// return ++ii > 22
// }, console.log)
var invoker=exports.invoker=function invoker(limit,interval){return function(fn,cb){var current=0;var _fn=function _fn(){current++;var result=fn();if(result){cb(null,result)}else if(current<limit){setTimeout(_fn,interval)}else{cb(new Error('Limit exceeded!'),null);cb=function cb(){}}};_fn()}};var transparentGif=exports.transparentGif='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';var brokenImg=exports.brokenImg='data:;base64,iVBORwOKGO==';// see: gh:egoist/switchy
var noSwitch=exports.noSwitch=function noSwitch(){var conds=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return function(c){if(typeof conds[c]==='function'){return conds[c]()}else if(typeof conds.default==='function'){return conds.default()}}};var objectFromEntries=exports.objectFromEntries=function objectFromEntries(entries){var res={};var len=entries.length;for(var i=0;i<len;++i){var ent=entries[i];var key=ent[0];var val=ent[1];res[key]=val}return res};// credit: gh:spicydonuts
var findWhere=exports.findWhere=function findWhere(fn,array){var found=null;array.some(function(item,i){if(fn(item,i)){found=item;return true}return false});return found};// credit: gh:spicydonuts
var dropWhere=exports.dropWhere=function dropWhere(fn,array){var keepers=[];array.forEach(function(item,i){if(!fn(item,i)){keepers.push(item)}});if(array.length===keepers.length){return array}return keepers};// from MDN's parseFloat docs
var filterFloat=exports.filterFloat=function filterFloat(value){if(/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)){return Number(value)}return NaN};var isObjectEmpty=exports.isObjectEmpty=function isObjectEmpty(obj){return obj.constructor===Object&&Object.keys(obj).length===0};var splitStringOn=exports.splitStringOn=function splitStringOn(str,spl){if(!str||typeof str!=='string'){console.warn('Please pass a string as first param.')}spl=spl||'';var idx=str.indexOf(spl);return idx===-1?null:[str.substr(0,idx),str.substr(idx+spl.length)]};var timeTest=exports.timeTest=function timeTest(n,cb){console.time('time');var r=cb(n);console.timeEnd('time');return r};var chunk=exports.chunk=function chunk(arr,n){if(!arr.length||n)return[];return[arr.slice(0,n)].concat(chunk(arr.slice(n),n))};var unless=exports.unless=function unless(cond,fn){return!cond?fn():null};// doubleUntil(10)(['hi'])
var doubleUntil=exports.doubleUntil=function doubleUntil(){var minSize=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return function double(arr){if(arr.length>=minSize)return arr;return double([].concat(_toConsumableArray(arr),_toConsumableArray(arr)))}};function maybeArgs(fn){return function(){var args=Array.prototype.slice.all(arguments);var invalid=args.some(function(arg){return arg===null});if(invalid)return;var result=fn.apply(this,args);return typeof result==='function'?maybeArgs(result):result}}// getKeyByValue({ foo: 'bar' }, 'bar')
var getKeyByValue=exports.getKeyByValue=function getKeyByValue(object,value){return Object.keys(object).find(function(key){return object[key]===value})};