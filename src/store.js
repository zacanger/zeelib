// @flow

/**
 * A very simple store implementation (think Redux-like)
 * Usage:
 * ```import { store } from 'zeelib'
 * const state = store()
 * state.subscribe((new, prev) => new.foo)
 * state.setState({ foo: 'bar' })
 * ```
 */

import objectAssign from './objectAssign'

const store = (state: Object = {}) => {
  let ls = []

  return {
    subscribe: (l: Function) => {
      ls.push(l)
    },
    unsubscribe: (l: Function) => {
      if (ls.includes(l)) {
        ls.splice(ls.indexOf(l), 1)
      }
    },
    setState: (n: Object | Function) => {
      const p = state
      state = objectAssign(
        {},
        p,
        typeof n === 'function' ? n(p) : n
      )
      for (let i = 0; i < ls.length; i++) {
        ls[i](state, p)
      }
    },
    getState: () => state
  }
}

export default store
