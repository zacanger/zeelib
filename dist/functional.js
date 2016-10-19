'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var memoizeSimple = exports.memoizeSimple = function memoizeSimple(fn) {
  var cachedArg = void 0,
      cachedRes = void 0;
  return function (arg) {
    if (cachedArg === arg) {
      return cachedRes;
    }
    cachedArg = arg;
    cachedRes = fn(arg);
    return cachedRes;
  };
};

var memoizeWithCache = exports.memoizeWithCache = function memoizeWithCache(fn) {
  return function (arg, memoCache) {
    if (memoCache.arg === arg) {
      return memoCache.res;
    }
    var res = fn(arg);
    memoCache.arg = arg;
    memoCache.res = res;
    return res;
  };
};

// export function memoize = function(fn) {
// const cache = {}
// const fnVal = function(val) {
// return val
// }
// return function() {
// const key = fnVal.apply(this, arguments)
// if (key in cache) {
// return cache[key]
// } else {
// const v = fn.apply(this, arguments)
// cache[key] = v
// return v
// }
// }
// }
//
// function memoize (fn) {
// var cache = {}
// return function (n) {
// var key = JSON.stringify([].slice.call(arguments))
// if (!(key in cache)) {
// cache[key] = fn.apply(null, arguments)
// }
// return cache[key]
// }
// }

// export const curry = fn => {
// const length = fn.length
// const acc = (...args) => {
// if (args.length === length) return fn(...args)
// return (...args) => acc(...args.concat(args))
// }
// return acc
// }

var curry = exports.curry = function curry(fn) {
  var originalArguments = getFunctionArguments(fn) || [];

  var makeCurriedFunc = function makeCurriedFunc() {
    var givenArguments = arguments || [];
    if (givenArguments.length < originalArguments.length) {
      return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        return makeCurriedFunc.apply(undefined, _toConsumableArray(givenArguments).concat(rest));
      };
    } else {
      return fn.apply(undefined, _toConsumableArray(givenArguments));
    }
  };

  return function () {
    return makeCurriedFunc.apply(undefined, arguments);
  };
};

var getFunctionArguments = exports.getFunctionArguments = function getFunctionArguments(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Not a function');
  }

  var functionAsString = fn.toString();

  var args = functionAsString.match(/\(.*?\)/)[0] // match everything between brackets
  .replace(/[()]/gi, '') // remove brackets
  .replace(/\s/gi, '') // remove all whitespace
  .split(','); // split on the commas

  return args.filter(function (x) {
    return x;
  }); // remove possible empty string from the result
};

// returns true if all items pass predicate fn
var all = exports.all = curry(function (predicate, list) {
  return !!list.reduce && typeof predicate === 'function' && list.reduce(function (result, current) {
    return !result ? false : !!predicate(current);
  }, true);
});

// r->l composition
var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return pipe.apply(undefined, _toConsumableArray(reverse(fns)));
};

// export const compose = (f, g) =>
//   x =>
//     f(g(x))

var identity = exports.identity = function identity(x) {
  return x;
};

var memoize = exports.memoize = function memoize(fn) {
  var results = new Map();
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var key = args.toString();
    if (!results.get(key)) {
      results.set(key, fn.apply(undefined, args));
    }
    return results.get(key);
  };
};

// returns true if current obj has prop that equals given val
var propEq = exports.propEq = curry(function (prop, value, data) {
  return data[prop] !== undefined && data[prop] === value;
});

// reduces data to single val
var reduce = exports.reduce = curry(function (fn, initialValue, data) {
  var reducedValue = initialValue;
  for (var i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i]);
  }
  return reducedValue;
});

// reverses array
var reverse = exports.reverse = function reverse(items) {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

// l->r composition
var pipe = exports.pipe = function pipe() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return function (data) {
    return reduce(function (v, fn) {
      return fn(v);
    }, data)(fns);
  };
};

// only calls fn once; subsequent calls just return first val
var once = exports.once = function once(fn) {
  var returnValue = void 0;
  return function () {
    if (!returnValue) {
      returnValue = fn.apply(undefined, arguments);
    }
    return returnValue;
  };
};

var unfold = exports.unfold = function unfold(fn, seed) {
  var r = fn(seed);
  if (!Array.isArray(r)) {
    return [];
  }
  return [r[0]].concat(unfold(fn, r[1]));
};

// credit: texas toland
// export const pipe = (x, ...s) =>
// s.reduce((y, f) =>
// f(y), x)
// more verbosely
// const pipe = (initialValue, ...fns) =>
// fns.reduce((state, fn) => fn(state), initialValue)