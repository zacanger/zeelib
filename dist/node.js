'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerminalSize = exports.getTerminalRows = exports.getTerminalCols = exports.hasColour = exports.userHome = exports.findPort = exports.termPrompt = exports.clr = exports.open = exports.getNodeModules = exports.tinyRouter = exports.logWithInfo = exports.err = exports.writeJsonSync = exports.writejson = exports.readJsonSync = exports.readJson = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _child_process = require('child_process');

var _readline = require('readline');

var _net = require('net');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// read json file, parse it, call cb with obj or err
var readJson = exports.readJson = function readJson(file, cb) {
  _fs2.default.readFile(file, 'utf8', function (err, json) {
    if (err) {
      cb(err);
      return;
    }
    var data = void 0;
    try {
      data = JSON.parse(json);
    } catch (e) {
      cb(e);
      return;
    }
    cb(null, data);
  });
};

// same as above, but sync
var readJsonSync = exports.readJsonSync = function readJsonSync(file) {
  return JSON.parse(_fs2.default.readFileSync(file, 'utf8'));
};

// write with data
var writejson = exports.writejson = function writejson(file, data, indent, cb) {
  if (typeof cb !== 'function') {
    cb = indent;
    indent = 0;
  }
  var json = void 0;
  try {
    json = JSON.stringify(data, null, indent);
  } catch (e) {
    cb(e);
    return;
  }
  _fs2.default.writeFile(file, json, 'utf8', cb);
};

// write json with data, sync
var writeJsonSync = exports.writeJsonSync = function writeJsonSync(file, data, indent) {
  if (typeof indent !== 'number') {
    indent = 0;
  }
  _fs2.default.writeFileSync(file, JSON.stringify(data, null, indent), 'utf8');
};

// use instead of `console.error()`; logs to file and stdout both
var fn = process.argv[2] || process.env.ERR_FILE || 'err.log';
var file = _fs2.default.createWriteStream(__dirname + '/' + fn, { flags: 'w' });
var err = exports.err = function err(d) {
  file.write(_util2.default.format(d) + '\n');
  process.stdout.write(_util2.default.format(d) + '\n');
};

var withInfo = function withInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str + ':' + _os2.default.hostname() + ':' + process.pid;
};

var logWithInfo = exports.logWithInfo = function logWithInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return console.log(withInfo(str));
};

// this is a tiny router. hence the name.
var tinyRouter = exports.tinyRouter = function tinyRouter(pathname, response) {
  var html = void 0,
      filePath = void 0;
  if (pathname !== '/favicon.ico') {
    try {
      filePath = './' + pathname;
      console.log('loading ' + filePath);
      html = _fs2.default.readFileSync(filePath);
      response.write(html);
      response.end();
    } catch (err) {
      console.log('unable to load ' + filePath);
      response.end();
    }
  }
};

var getNodeModules = exports.getNodeModules = function getNodeModules() {
  var nodeModules = {};
  _fs2.default.readdirSync('node_modules').filter(function (a) {
    return ['.bin'].indexOf(a) === -1;
  }).forEach(function (b) {
    nodeModules[b] = 'commonjs ' + b;
  });
  return nodeModules;
};

var open = exports.open = function open(args, opts, cb) {
  args = [args];
  var cmd = process.platform === 'win32' ? 'cmd' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  return (0, _child_process.execFile)(cmd, args, opts, cb);
};

// options:
// bold, italic, underline, inverse,
// white, grey, black, blue, cyan, green, magenta, red, yellow
// usage:
// const c = require('./color')
// console.log(c.bold(c.blue('foo')))
var colorize = function colorize(color, text) {
  var codes = _util2.default.inspect.colors[color];
  return '\x1B[' + codes[0] + 'm' + text + '\x1B[' + codes[1] + 'm';
};
var colors = function colors() {
  var val = {};
  Object.keys(_util2.default.inspect.colors).forEach(function (color) {
    val[color] = function (text) {
      return colorize(color, text);
    };
  });
  return val;
};
var clr = exports.clr = colors();

// adapted from create-react-app's prompt
// prompt('Do the thing?') // with 'no' default
// prompt('Do the thing?' 1) // with 'yes' default
var termPrompt = exports.termPrompt = function termPrompt(question, isYesDefault) {
  return new Promise(function (resolve) {
    var rlInterface = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });

    var hint = isYesDefault ? '[Y/n]' : '[y/N]';
    var message = question + ' ' + hint + '\n';

    rlInterface.question(message, function (answer) {
      rlInterface.close();

      var useDefault = answer.trim().length === 0;
      if (useDefault) return resolve(isYesDefault);

      var isYes = answer.match(/^(yes|y)$/i);
      return resolve(isYes);
    });
  });
};

// find next open port
// findPort(8000, (err, port) => {})
var findPort = exports.findPort = function findPort(port, cb) {
  var server = (0, _net.createServer)(function () {});
  var onListen = function onListen() {
    server.removeListener('error', onError);
    server.close();
    cb(null, port);
  };
  var onError = function onError(err) {
    server.removeListener('listening', onListen);
    if (err.code !== ('EADDRINUSE' || 'EACCESS')) {
      return cb(err);
    }
    findPort(port + 1, cb);
  };
  server.once('error', onError);
  server.once('listening', onListen);
  server.listen(port);
};

var userHome = exports.userHome = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || _os2.default.homedir() || process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// check if a terminal supports colour
var isWin = function isWin() {
  return process.platform === 'win32';
};
var isColour = function isColour() {
  var termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i;
  return !!process.env.COLORTERM || termColour.test(process.env.TERM);
};
var hasColour = exports.hasColour = isWin() || isColour();

var getTerminalCols = exports.getTerminalCols = function getTerminalCols() {
  return process.stdout.columns;
};

var getTerminalRows = exports.getTerminalRows = function getTerminalRows() {
  return process.stdout.rows;
};

var getTerminalSize = exports.getTerminalSize = function getTerminalSize() {
  return {
    cols: process.stdout.columns,
    rows: process.stdout.rows
  };
};