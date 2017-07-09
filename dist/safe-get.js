'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined = require('./is-undefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isNull = require('./is-null');

var _isNull2 = _interopRequireDefault(_isNull);

var _isFunction = require('./is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTokenFunctionCall = function isTokenFunctionCall(t) {
  return t === '()';
};

var isTokenArrayAccess = function isTokenArrayAccess(t) {
  return (/^\[\d+\]$/.test(t)
  );
};

var tokenize = function tokenize(s) {
  return s.split(/\.|(\(\))|(\[\d+?])/).filter(function (t) {
    return t;
  });
};

function helper(obj, tokens, ctx, fnArgs) {
  if (tokens.length === 0) {
    return obj;
  }

  var currentToken = tokens[0];

  if ((0, _isUndefined2.default)(obj) || (0, _isNull2.default)(obj) || isTokenFunctionCall(currentToken) && !(0, _isFunction2.default)(obj)) {
    return undefined;
  }

  if (isTokenFunctionCall(currentToken)) {
    return helper(obj[(0, _isArray2.default)(fnArgs[0]) ? 'apply' : 'call'](ctx, fnArgs[0]), tokens.slice(1), null, fnArgs.slice(1));
  } else if (isTokenArrayAccess(currentToken)) {
    return helper(obj[parseInt(currentToken.substr(1), 10)], tokens.slice(1), isTokenFunctionCall(tokens[1]) ? obj : ctx, fnArgs);
  } else {
    return helper(obj[currentToken], tokens.slice(1), isTokenFunctionCall(tokens[1]) ? obj : ctx, fnArgs);
  }
}

function safeGet(obj, accessStr) {
  if ((0, _isUndefined2.default)(accessStr)) {
    return safeGet.bind(null, obj);
  }

  var funcArgs = Array.prototype.slice.call(arguments, 2);
  return helper(obj, tokenize(accessStr), null, funcArgs);
}

exports.default = safeGet;