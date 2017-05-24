// @flow

import isUndefined from './isUndefined'
import isArray from './isArray'
import isNull from './isNull'
import isFunction from './isFunction'

const isTokenFunctionCall = (t: string): bool =>
  t === '()'

const isTokenArrayAccess = (t: string): bool =>
  /^\[\d+\]$/.test(t)

const tokenize = (s: string): string[] =>
  s.split(/\.|(\(\))|(\[\d+?])/).filter((t) => t)

function helper (obj: Object, tokens: string[], ctx: any, fnArgs: any): any {
  if (tokens.length === 0) {
    return obj
  }

  const currentToken = tokens[0]

  if (isUndefined(obj) || isNull(obj) ||
    (isTokenFunctionCall(currentToken) && !isFunction(obj))) {
    return undefined
  }

  if (isTokenFunctionCall(currentToken)) {
    return helper(
      obj[isArray(fnArgs[0]) ? 'apply' : 'call'](ctx, fnArgs[0]),
      tokens.slice(1),
      null,
      fnArgs.slice(1)
    )
  } else if (isTokenArrayAccess(currentToken)) {
    return helper(
      obj[parseInt(currentToken.substr(1), 10)],
      tokens.slice(1),
      isTokenFunctionCall(tokens[1]) ? obj : ctx,
      fnArgs
    )
  } else {
    return helper(
      obj[currentToken],
      tokens.slice(1),
      isTokenFunctionCall(tokens[1]) ? obj : ctx,
      fnArgs
    )
  }
}

/**
 * Like `_.get`: takes an object and an access string
 */

function safeGet (obj: Object, accessStr: string): any {
  if (isUndefined(accessStr)) {
    return safeGet.bind(null, obj)
  }

  const funcArgs = Array.prototype.slice.call(arguments, 2)
  return helper(obj, tokenize(accessStr), null, funcArgs)
}

export default safeGet
