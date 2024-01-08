import { type AnyMap } from './types'

type Listener = (a: AnyMap, b: AnyMap) => any
type Updater = (a: AnyMap) => AnyMap

interface Store {
  subscribe: (l: Listener) => void
  unsubscribe: (l: Listener) => void
  update: (n: AnyMap | Updater) => void
}

/**
 * A very simple store implementation (think Redux-like)
 * @example
 * const state = store()
 * state.subscribe((next, prev) => next.foo)
 * state.update({ foo: 'bar' })
 */

export const store = (state: AnyMap = {}): Store => {
  const ls: Listener[] = []

  return {
    subscribe: (l: Listener) => {
      ls.push(l)
    },
    unsubscribe: (l: Listener) => {
      if (ls.includes(l)) {
        ls.splice(ls.indexOf(l), 1)
      }
    },
    update: (n: AnyMap | Updater) => {
      const p = state
      state = Object.assign(
        {},
        p,
        typeof n === 'function' ? n(p) : n,
      )
      for (let i = 0; i < ls.length; i++) {
        ls[i](state, p)
      }
    },
  }
}
