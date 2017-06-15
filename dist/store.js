'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * A very simple store implementation (think Redux-like)
 * @example
 * import { store } from 'zeelib'
 * const state = store()
 * state.subscribe((new, prev) => new.foo)
 * state.setState({ foo: 'bar' })
 */

var store = function store() {
  var state /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ls = [];

  return {
    subscribe: function subscribe(l /*: Function*/) {
      ls.push(l);
    },
    unsubscribe: function unsubscribe(l /*: Function*/) {
      if (ls.includes(l)) {
        ls.splice(ls.indexOf(l), 1);
      }
    },
    setState: function setState(n /*: Object | Function*/) {
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