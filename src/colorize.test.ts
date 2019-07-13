import * as test from 'tape'
import color from './colorize'
import { inspect } from 'util'

test('color.blue()', (t): void => {
  // @ts-ignore
  const col = inspect(color.blue('foo'))
  const str = "'\\u001b[34mfoo\\u001b[39m'"
  t.is(col, str, 'returns string wrapped in appropriate escape codes')
  t.end()
})
