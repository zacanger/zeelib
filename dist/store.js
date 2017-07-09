'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var store = function store() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ls = [];

  return {
    subscribe: function subscribe(l) {
      ls.push(l);
    },
    unsubscribe: function unsubscribe(l) {
      if (ls.includes(l)) {
        ls.splice(ls.indexOf(l), 1);
      }
    },
    setState: function setState(n) {
      var p = state;
      state = Object.assign({}, p, typeof n === 'function' ? n(p) : n);
      for (var i = 0; i < ls.length; i++) {
        ls[i](state, p);
      }
    },
    getState: function getState() {
      return state;
    }
  };
};

exports.default = store;