// @flow

import test from 'tape'
import isValidEmail from './is-valid-email'

test('isValidEmail', (t): void => {
  t.true(isValidEmail('zac@zacanger.com'), 'returns true for my email')
  t.false(isValidEmail('lkjsfd!!!.#'), 'returns false for noise')
  t.end()
})
