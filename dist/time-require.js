'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var timeRequire = function timeRequire() {
  return require.extensions['.js'] = function (module, filename) {
    var strt = new Date();
    var cont = (0, _fs.readFileSync)(filename, 'utf8').toString();
    var modl = module._compile(cont, filename);
    var arry = [];
    var item = new Date() - strt + ' : ' + filename;
    arry.push(item);
    console.log(arry);
    return modl;
  };
}; /* eslint-disable  */

/**
 * Just require this and invoke to time requires into that file
 * based on gh:stefanpenner/node-require-timings
 * Takes no parameters
 * @example
 * timeRequire()
 */

exports.default = timeRequire;