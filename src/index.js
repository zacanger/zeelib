// dom
import getCookie from './getCookie'
import getHeight from './getHeight'
import getIsBrowser from './getIsBrowser'
import getReferrer from './getReferrer'
import getScrollBarWidth from './getScrollBarWidth'
import getWidth from './getWidth'
import restoreScrollPosition from './restoreScrollPosition'
import scrollTop from './scrollTop'
// keycodes
import getKeyCodes from './getKeyCodes'
// regex, string utils, etc.
import addNewlines from './addNewlines'
import alphaNumericOnly from './alphaNumericOnly'
import camelCaseToLispCase from './camelCaseToLispCase'
import camelCaseToSnakeCase from './camelCaseToSnakeCase'
import capitalizeFirstChar from './capitalizeFirstChar'
import collapseWhitespace from './collapseWhitespace'
import combineRegex from './combineRegex'
import cssToJson from './cssToJson'
import escapeHtml from './escapeHtml'
import fixWindowsSlashes from './fixWindowsSlashes'
import getComplimentaryColors from './getComplimentaryColors'
import getRandomHex32 from './getRandomHex32'
import getRandomString from './getRandomString'
import getUid4 from './getUid4'
import getUid8 from './getUid8'
import hexRegex from './hexRegex'
import inlineString from './inlineString'
import isAlphaNumeric from './isAlphaNumeric'
import isEmoji from './isEmoji'
import isEmptyString from './isEmptyString'
import isHexBased from './isHexBased'
import isMobileOrTablet from './isMobileOrTablet'
import isStringSomewhereInArray from './isStringSomewhereInArray'
import isValidEmail from './isValidEmail'
import isValidHex from './isValidHex'
import lightenOrDarken from './lightenOrDarken'
import lispCaseToCamelCase from './lispCaseToCamelCase'
import minifyString from './minifyString'
import newlinesToSpaces from './newlinesToSpaces'
import normalizeClassname from './normalizeClassname'
import normalizeColor from './normalizeColor'
import normalizeText from './normalizeText'
import randomColor from './randomColor'
import removeNewlines from './removeNewlines'
import removeNonAlpha from './removeNonAlpha'
import removeNonAlphaNumeric from './removeNonAlphaNumeric'
import removeNonNumeric from './removeNonNumeric'
import removeNumeric from './removeNumeric'
import removeTags from './removeTags'
import removeWhitespace from './removeWhitespace'
import rot13 from './rot13'
import snakeCaseToCamelCase from './snakeCaseToCamelCase'
import stripPunctuation from './stripPunctuation'
import trimHash from './trimHash'
import trimSpaces from './trimSpaces'
import unescapeHtml from './unescapeHtml'
// node
import base64BufferDec from './base64BufferDec'
import base64BufferEnc from './base64BufferEnc'
import colorize from './colorize'
import dir from './dir'
import findPort from './findPort'
import getNodeModules from './getNodeModules'
import getTerminalColumns from './getTerminalColumns'
import getTerminalRows from './getTerminalRows'
import getTerminalSize from './getTerminalSize'
import getUserHome from './getUserHome'
import hasColor from './hasColor'
import isInstalled from './isInstalled'
import logWithInfo from './logWithInfo'
import open from './open'
import readJson from './readJson'
import readJsonSync from './readJsonSync'
import termPrompt from './termPrompt'
import tinyRouter from './tinyRouter'
import writeError from './writeError'
import writeJson from './writeJson'
import writeJsonSync from './writeJsonSync'
// fp utils
import all from './all'
import compose from './compose'
import curry from './curry'
import each from './each'
import filter from './filter'
import getFunctionArguments from './getFunctionArguments'
import id from './id'
import invoke from './invoke'
import map from './map'
import memoize from './memoize'
import mix from './mix'
import not from './not'
import once from './once'
import pair from './pair'
import pipe from './pipe'
import propEq from './propEq'
import reduce from './reduce'
import reverse from './reverse'
import unfold from './unfold'
import zip from './zip'
import zipThen from './zipThen'
import zipWith from './zipWith'
// types
import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isBoolean from './isBoolean'
import isDate from './isDate'
import isDefined from './isDefined'
import isDomElement from './isDomElement'
import isEmpty from './isEmpty'
import isEven from './isEven'
import isFloat from './isFloat'
import isFunction from './isFunction'
import isInteger from './isInteger'
import isJson from './isJson'
import isNan from './isNan'
import isNegative from './isNegative'
import isNodeList from './isNodeList'
import isNull from './isNull'
import isNumber from './isNumber'
import isObject from './isObject'
import isObjectEqual from './isObjectEqual'
import isOdd from './isOdd'
import isPositive from './isPositive'
import isPow2 from './isPow2'
import isPrimitive from './isPrimitive'
import isPromise from './isPromise'
import isRegExp from './isRegExp'
import isString from './isString'
import isType from './isType'
import isUndefined from './isUndefined'
import objectToString from './objectToString'
import toType from './toType'
import typeOf from './typeOf'
// misc
import chunk from './chunk'
import cloneWithout from './cloneWithout'
import copy from './copy'
import copyWithout from './copyWithout'
import deepCopy from './deepCopy'
import doubleUntil from './doubleUntil'
import dropWhere from './dropWhere'
import filterFloat from './filterFloat'
import findWhere from './findWhere'
import getBrokenImage from './getBrokenImage'
import getKeyByValue from './getKeyByValue'
import getNiceDate from './getNiceDate'
import getTransparentGif from './getTransparentGif'
import greatestCommonDivisor from './greatestCommonDivisor'
import invoker from './invoker'
import isObjectEmpty from './isObjectEmpty'
import leastCommonMultiple from './leastCommonMultiple'
import leftPad from './leftPad'
import lesser from './lesser'
import logWithTimestamp from './logWithTimestamp'
import maybeArgs from './maybeArgs'
import nco from './nco'
import noSwitch from './noSwitch'
import objectAssign from './objectAssign'
import objectClone from './objectClone'
import objectFromEntries from './objectFromEntries'
import objectInherit from './objectInherit'
import reverseDigits from './reverseDigits'
import shallowCopy from './shallowCopy'
import sleep from './sleep'
import splitStringOn from './splitStringOn'
import tap from './tap'
import throwError from './throwError'
import timeTest from './timeTest'
import transpose from './transpose'
import transposeFlat from './transposeFlat'
import tryExecNTimes from './tryExecNTimes'
import unless from './unless'
import xor from './xor'

export default {
  // dom
  getCookie
, getHeight
, getIsBrowser
, getReferrer
, getScrollBarWidth
, getWidth
, restoreScrollPosition
, scrollTop
// keycodes
, getKeyCodes
// regex, string utils, etc.
, addNewlines
, alphaNumericOnly
, camelCaseToLispCase
, camelCaseToSnakeCase
, capitalizeFirstChar
, collapseWhitespace
, combineRegex
, cssToJson
, escapeHtml
, fixWindowsSlashes
, getComplimentaryColors
, getRandomHex32
, getRandomString
, getUid4
, getUid8
, hexRegex
, inlineString
, isAlphaNumeric
, isEmoji
, isEmptyString
, isHexBased
, isMobileOrTablet
, isStringSomewhereInArray
, isValidEmail
, isValidHex
, lightenOrDarken
, lispCaseToCamelCase
, minifyString
, newlinesToSpaces
, normalizeClassname
, normalizeColor
, normalizeText
, randomColor
, removeNewlines
, removeNonAlpha
, removeNonAlphaNumeric
, removeNonNumeric
, removeNumeric
, removeTags
, removeWhitespace
, rot13
, snakeCaseToCamelCase
, stripPunctuation
, trimHash
, trimSpaces
, unescapeHtml
// node
, base64BufferDec
, base64BufferEnc
, colorize
, dir
, findPort
, getNodeModules
, getTerminalColumns
, getTerminalRows
, getTerminalSize
, getUserHome
, hasColor
, isInstalled
, logWithInfo
, open
, readJson
, readJsonSync
, termPrompt
, tinyRouter
, writeError
, writeJson
, writeJsonSync
// fp utils
, all
, compose
, curry
, each
, filter
, getFunctionArguments
, id
, invoke
, map
, memoize
, mix
, not
, once
, pair
, pipe
, propEq
, reduce
, reverse
, unfold
, zip
, zipThen
, zipWith
// types
, isArray
, isArrayLike
, isBoolean
, isDate
, isDefined
, isDomElement
, isEmpty
, isEven
, isFloat
, isFunction
, isInteger
, isJson
, isNan
, isNegative
, isNodeList
, isNull
, isNumber
, isObject
, isObjectEqual
, isOdd
, isPositive
, isPow2
, isPrimitive
, isPromise
, isRegExp
, isString
, isType
, isUndefined
, objectToString
, toType
, typeOf
// misc
, chunk
, cloneWithout
, copy
, copyWithout
, deepCopy
, doubleUntil
, dropWhere
, filterFloat
, findWhere
, getBrokenImage
, getKeyByValue
, getNiceDate
, getTransparentGif
, greatestCommonDivisor
, invoker
, isObjectEmpty
, leastCommonMultiple
, leftPad
, lesser
, logWithTimestamp
, maybeArgs
, nco
, noSwitch
, objectAssign
, objectClone
, objectFromEntries
, objectInherit
, reverseDigits
, shallowCopy
, sleep
, splitStringOn
, tap
, throwError
, timeTest
, transpose
, transposeFlat
, tryExecNTimes
, unless
, xor
}
