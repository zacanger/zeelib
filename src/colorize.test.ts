import * as test from 'tape'
import color from './colorize'
import { inspect } from 'util'

test('color.blue()', (t): void => {
  // @ts-ignore
  const col = inspect(color.blue('foo'))
  // differs based on node version
  const a = "'\\u001b[34mfoo\\u001b[39m'"
  const b = "'\\x1B[34mfoo\\x1B[39m'"

  t.true(
    col === a || col === b,
    'returns string wrapped in appropriate escape codes'
  )
  t.end()
})
