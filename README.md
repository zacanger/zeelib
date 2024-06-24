zeelib / [Exports]()

# zeelib

Utility library in TypeScript, with a focus on Node and FP utils and emphasis on
_not_ rewriting builtin features.

* [npm](https://npmjs.com/package/zeelib)
* [Changes](./CHANGELOG.md)
* [Contributing](./.github/CONTRIBUTING.md)
* [License (MIT)](./LICENSE.md)

[![npm version](https://img.shields.io/npm/v/zeelib.svg)](https://npm.im/zeelib) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB) [![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger)

----

## Installation

`npm i zeelib`

## Usage

See the docs below for details (generated from types and comments). Example:

```typescript
import * as z from 'zeelib'

const answer = await z.prompt('Pick a letter')
if (z.isEmpty(answer)) process.exit(1)
```

----

<details>
  <summary>Full Docs</summary>
[zeelib](README.md) / Exports

# zeelib

## Table of contents

### Interfaces

- [Size](interfaces/Size.md)
- [Store](interfaces/Store.md)

### Type Aliases

- [AnyFn](#anyfn)
- [AnyMap](#anymap)
- [Cb](#cb)
- [ColMap](#colmap)
- [F](#f)
- [Listener](#listener)
- [R](#r)
- [R](#r-1)
- [Timer](#timer)
- [Updater](#updater)

### Variables

- [colorize](#colorize)

### Functions

- [and](#and)
- [average](#average)
- [capitalizeFirstChar](#capitalizefirstchar)
- [chunk](#chunk)
- [clamp](#clamp)
- [collapseNewlines](#collapsenewlines)
- [collapseWhitespace](#collapsewhitespace)
- [collectBy](#collectby)
- [combineRegex](#combineregex)
- [compose](#compose)
- [countIn](#countin)
- [curry](#curry)
- [debounce](#debounce)
- [diff](#diff)
- [div](#div)
- [drop](#drop)
- [dropWhile](#dropwhile)
- [each](#each)
- [escapeForRegex](#escapeforregex)
- [execute](#execute)
- [fileExists](#fileexists)
- [filter](#filter)
- [findIndices](#findindices)
- [findPort](#findport)
- [flattenAndUniq](#flattenanduniq)
- [flip](#flip)
- [fold](#fold)
- [getFreeDisk](#getfreedisk)
- [getFreeMemory](#getfreememory)
- [getGlobal](#getglobal)
- [getHashFromDate](#gethashfromdate)
- [getHashFromSystem](#gethashfromsystem)
- [getKeyByValue](#getkeybyvalue)
- [getLoadAverage](#getloadaverage)
- [getMemoryUsage](#getmemoryusage)
- [getOrdinal](#getordinal)
- [getProjectRoot](#getprojectroot)
- [getRegexFlags](#getregexflags)
- [getStdin](#getstdin)
- [getTerminalColumns](#getterminalcolumns)
- [getTerminalRows](#getterminalrows)
- [getTerminalSize](#getterminalsize)
- [getUserHome](#getuserhome)
- [getUserShell](#getusershell)
- [greater](#greater)
- [groupBy](#groupby)
- [has](#has)
- [hasColor](#hascolor)
- [hasDuplicate](#hasduplicate)
- [head](#head)
- [id](#id)
- [init](#init)
- [initials](#initials)
- [intersection](#intersection)
- [is](#is)
- [isArrayLike](#isarraylike)
- [isBetween](#isbetween)
- [isBoolean](#isboolean)
- [isClass](#isclass)
- [isDate](#isdate)
- [isDefined](#isdefined)
- [isDirectory](#isdirectory)
- [isEmpty](#isempty)
- [isError](#iserror)
- [isEven](#iseven)
- [isFile](#isfile)
- [isFloat](#isfloat)
- [isFunction](#isfunction)
- [isGenerator](#isgenerator)
- [isGeneratorFunction](#isgeneratorfunction)
- [isInstalled](#isinstalled)
- [isInteger](#isinteger)
- [isJson](#isjson)
- [isMap](#ismap)
- [isNode](#isnode)
- [isNull](#isnull)
- [isNullOrUndefined](#isnullorundefined)
- [isNumber](#isnumber)
- [isObject](#isobject)
- [isOdd](#isodd)
- [isPrimitive](#isprimitive)
- [isPromise](#ispromise)
- [isRegExp](#isregexp)
- [isRoot](#isroot)
- [isSemver](#issemver)
- [isSet](#isset)
- [isString](#isstring)
- [isSymLink](#issymlink)
- [isSymbol](#issymbol)
- [isUndefined](#isundefined)
- [isValidDate](#isvaliddate)
- [keep](#keep)
- [last](#last)
- [len](#len)
- [lesser](#lesser)
- [lightenOrDarken](#lightenordarken)
- [lines](#lines)
- [mapObject](#mapobject)
- [memoize](#memoize)
- [mzero](#mzero)
- [objectToString](#objecttostring)
- [once](#once)
- [open](#open)
- [pick](#pick)
- [pipe](#pipe)
- [pluck](#pluck)
- [product](#product)
- [prompt](#prompt)
- [range](#range)
- [readJson](#readjson)
- [reduce](#reduce)
- [removeBOM](#removebom)
- [replicate](#replicate)
- [rgbToHex](#rgbtohex)
- [safeGet](#safeget)
- [scaleToFit](#scaletofit)
- [shuffle](#shuffle)
- [sleep](#sleep)
- [sortBy](#sortby)
- [sortObject](#sortobject)
- [span](#span)
- [splitAt](#splitat)
- [store](#store)
- [stripAnsi](#stripansi)
- [sub](#sub)
- [sum](#sum)
- [tail](#tail)
- [take](#take)
- [takeLast](#takelast)
- [takeWhile](#takewhile)
- [tap](#tap)
- [touch](#touch)
- [truncate](#truncate)
- [tryJson](#tryjson)
- [typeOf](#typeof)
- [union](#union)
- [uniq](#uniq)
- [uniqBy](#uniqby)
- [unless](#unless)
- [unlines](#unlines)
- [until](#until)
- [unwords](#unwords)
- [watch](#watch)
- [words](#words)
- [writeJson](#writejson)

## Type Aliases

### AnyFn

Ƭ **AnyFn**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[pipe.ts:3](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/pipe.ts#L3)

___

### AnyMap

Ƭ **AnyMap**: `Record`\<`string`, `any`\>

#### Defined in

[types.ts:1](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/types.ts#L1)

___

### Cb

Ƭ **Cb**: (`error`: `c.ExecFileException` \| ``null``, `stdout`: `string` \| `Buffer`, `stderr`: `string` \| `Buffer`) => `void`

#### Type declaration

▸ (`error`, `stdout`, `stderr`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `c.ExecFileException` \| ``null`` |
| `stdout` | `string` \| `Buffer` |
| `stderr` | `string` \| `Buffer` |

##### Returns

`void`

#### Defined in

[open.ts:4](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/open.ts#L4)

___

### ColMap

Ƭ **ColMap**: `Record`\<`string`, (`t`: `string`) => `string`\>

#### Defined in

[colorize.ts:4](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/colorize.ts#L4)

___

### F

Ƭ **F**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[curry.ts:1](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/curry.ts#L1)

___

### Listener

Ƭ **Listener**: (`a`: [`AnyMap`](#anymap), `b`: [`AnyMap`](#anymap)) => `any`

#### Type declaration

▸ (`a`, `b`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AnyMap`](#anymap) |
| `b` | [`AnyMap`](#anymap) |

##### Returns

`any`

#### Defined in

[store.ts:3](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/store.ts#L3)

___

### R

Ƭ **R**: (...`args`: `any`[]) => [`Timer`](#timer)

#### Type declaration

▸ (`...args`): [`Timer`](#timer)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`Timer`](#timer)

#### Defined in

[debounce.ts:2](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/debounce.ts#L2)

___

### R

Ƭ **R**: `string` \| `any`[] \| [`AnyMap`](#anymap)

#### Defined in

[keep.ts:4](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/keep.ts#L4)

___

### Timer

Ƭ **Timer**: `NodeJS.Timeout` \| `number` \| ``null``

#### Defined in

[debounce.ts:1](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/debounce.ts#L1)

___

### Updater

Ƭ **Updater**: (`a`: [`AnyMap`](#anymap)) => [`AnyMap`](#anymap)

#### Type declaration

▸ (`a`): [`AnyMap`](#anymap)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`AnyMap`](#anymap) |

##### Returns

[`AnyMap`](#anymap)

#### Defined in

[store.ts:4](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/store.ts#L4)

## Variables

### colorize

• `Const` **colorize**: [`ColMap`](#colmap)

#### Defined in

[colorize.ts:34](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/colorize.ts#L34)

## Functions

### and

▸ **and**\<`T`\>(`a`): `boolean`

Returns false if any in input array is false

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |

#### Returns

`boolean`

**`Example`**

```ts
and([ 1, 2, 3 ]) // => true
and([ 1, 2, 3, false ]) // => false
```

#### Defined in

[and.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/and.ts#L8)

___

### average

▸ **average**(`xs`): `number`

Averages a list of numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `number`[] |

#### Returns

`number`

**`Example`**

```ts
average([ 2, 4, 6, 8 ]) // => 5
```

#### Defined in

[average.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/average.ts#L7)

___

### capitalizeFirstChar

▸ **capitalizeFirstChar**(`str`): `string`

Capitalizes the first character of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

**`Example`**

```ts
capitalizeFirstChar('things and stuff') // => 'Things and stuff'
```

#### Defined in

[capitalize-first-char.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/capitalize-first-char.ts#L7)

___

### chunk

▸ **chunk**\<`T`\>(`arr`, `n`): `T`[][]

Splits an array into chunks

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `n` | `number` |

#### Returns

`T`[][]

**`Example`**

```ts
chunk([1, 2, 3, 4 ], 2) // => [ [ 1, 2 ], [ 3, 4 ] ]
```

#### Defined in

[chunk.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/chunk.ts#L7)

___

### clamp

▸ **clamp**(`val`, `min`, `max`): `number`

Takes a number, min, and max
If number is between min and max, returns number
Otherwise returns min or max

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

**`Example`**

```ts
clamp(100, 0, 1000) // => 100
clamp(100, 101, 1000) // => 101
clamp(100, 0, 99) // => 00
```

#### Defined in

[clamp.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/clamp.ts#L11)

___

### collapseNewlines

▸ **collapseNewlines**(`str`): `string`

Collapses multiple newlines to two

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

**`Example`**

```ts
collapseNewlines('\n\n\n\n') // => '\n\n'
```

#### Defined in

[collapse-newlines.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/collapse-newlines.ts#L7)

___

### collapseWhitespace

▸ **collapseWhitespace**(`str`): `string`

Collapses consecutive whitespace to a single space

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

**`Example`**

```ts
collapseWhitespace('a\n\r\t\nb') // => 'a b'
```

#### Defined in

[collapse-whitespace.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/collapse-whitespace.ts#L7)

___

### collectBy

▸ **collectBy**(`p`): (`a`: `any`[]) => [`AnyMap`](#anymap)

Collect an an array of objects by string key
cred: gh:uniqname

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`fn`

▸ (`a`): [`AnyMap`](#anymap)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any`[] |

##### Returns

[`AnyMap`](#anymap)

**`Example`**

```ts
const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
collectBy('foo')(data) // => { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
```

#### Defined in

[collect-by.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/collect-by.ts#L11)

___

### combineRegex

▸ **combineRegex**(`rs`, `opts?`): `RegExp`

Combines regular expressions

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rs` | `RegExp`[] | `undefined` |
| `opts` | `string` | `''` |

#### Returns

`RegExp`

**`Example`**

```ts
combineRegex([/[a-z]/, /[0-9]], 'g') ==> /[a-z][0-9]/g
```

#### Defined in

[combine-regex.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/combine-regex.ts#L7)

___

### compose

▸ **compose**\<`T`\>(`...fns`): (`t`: `T`) => `T`

Right to left composition

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...fns` | (`t`: `T`) => `T`[] |

#### Returns

`fn`

▸ (`t`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `T` |

##### Returns

`T`

**`Example`**

```ts
const addOne = (a) => a + 1
const timesTwo = (a) => a * 2
compose(addOne, timesTwo)(2) // => 5
```

#### Defined in

[compose.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/compose.ts#L11)

___

### countIn

▸ **countIn**\<`T`\>(`el`, `ls`): `number`

Find out how many of a given element is in
an array or string.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `T` |
| `ls` | `string` \| `T`[] |

#### Returns

`number`

**`Example`**

```ts
countIn('a', 'abc') // => 1
countIn('a', [ 'a', 'b', 'c' ]) // => 1
```

#### Defined in

[count-in.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/count-in.ts#L9)

___

### curry

▸ **curry**\<`T`\>(`fn`): [`F`](#f)

Takes a function and returns a function that takes
any number of arguments

Produces a curried function

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`F`](#f) |

#### Returns

[`F`](#f)

**`Example`**

```ts
const addThree = (a, b, c) => a + b + c
curry(addThree)(1)(1)(1) // => 3
```

#### Defined in

[curry.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/curry.ts#L13)

___

### debounce

▸ **debounce**(`fn`, `ms`): [`R`](#r)

Simple debounce

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`) => `any` |
| `ms` | `number` |

#### Returns

[`R`](#r)

**`Example`**

```ts
debounce(() => console.log('hi'), 5000)
```

#### Defined in

[debounce.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/debounce.ts#L10)

___

### diff

▸ **diff**\<`T`\>(`a`, `b`): `T`[]

Diff two arrays

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T`[] |
| `b` | `T`[] |

#### Returns

`T`[]

**`Example`**

```ts
diff([ 1, 2, 3 ], [ 2, 3 ]) // => [ 1 ]
```

#### Defined in

[diff.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/diff.ts#L7)

___

### div

▸ **div**(`ns`): `number`

Divide any amount of numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `ns` | `number`[] |

#### Returns

`number`

**`Example`**

```ts
div([ 4, 2, 1 ]) // => 2
```

#### Defined in

[div.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/div.ts#L7)

___

### drop

▸ **drop**\<`A`\>(`n`, `arr`): `A`[]

Like Haskell's `drop`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `arr` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
drop(2, [ 1, 2, 3 ]) // => 3
```

#### Defined in

[drop.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/drop.ts#L7)

___

### dropWhile

▸ **dropWhile**\<`T`\>(`pred`, `arr`): `T`[]

The opposite of `takeWhile`:
takes a predicate and array and returns an
array of the elements that didn't pass the predicate

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`x`: `T`) => `boolean` |
| `arr` | `T`[] |

#### Returns

`T`[]

**`Example`**

```ts
dropWhile(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
```

#### Defined in

[drop-while.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/drop-while.ts#L11)

___

### each

▸ **each**\<`T`\>(`xs`, `fn`): `Record`\<`string`, `any`\> \| `T`[]

Takes an array or object
and a function, and runs the function
on each element

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `string` \| `any`[] \| `Record`\<`string`, `any`\> |
| `fn` | (`a`: `any`, `b`: `string` \| `number`) => `T` |

#### Returns

`Record`\<`string`, `any`\> \| `T`[]

**`Example`**

```ts
each([ 'a', 'b', 'c' ], id) // => 'a'
```

#### Defined in

[each.ts:33](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/each.ts#L33)

___

### escapeForRegex

▸ **escapeForRegex**(`s?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `''` |

#### Returns

`string`

**`Example`**

```ts
escapeForRegex('foo') // => foo
escapeForRegex('1 \\ {} []|') // => '1 \\\\ \{\} \\[\\]\\|'
```

#### Defined in

[escape-for-regex.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/escape-for-regex.ts#L7)

___

### execute

▸ **execute**(`cmd`): `void`

Like a standalone `npm run` that obeys `npm bin`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |

#### Returns

`void`

**`Example`**

```ts
execute('standard-format -w')
```

#### Defined in

[execute.ts:15](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/execute.ts#L15)

___

### fileExists

▸ **fileExists**(`filePath`): `Promise`\<`boolean`\>

Returns bool based on if passed path exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

```ts
await fileExists('./foo') // => Promise<true>
```

#### Defined in

[file-exists.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/file-exists.ts#L10)

___

### filter

▸ **filter**\<`T`\>(`fn`, `list`): `T`[] \| `Record`\<`string`, `T`\>

`filter` for array and object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`x`: `T`, `y`: `string` \| `number`) => `boolean` |
| `list` | `string` \| [`AnyMap`](#anymap) \| `T`[] |

#### Returns

`T`[] \| `Record`\<`string`, `T`\>

**`Example`**

```ts
filter(id, [ 1, 2 ]) // => [ 1, 2 ]
filter(lessThanThree, [ 1, 2, 3, 4 ]) // => [ 1, 2 ]
filter(lessThanThree, { a: 1, b: 4 }) // =>  { a: 1 }
```

#### Defined in

[filter.ts:14](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/filter.ts#L14)

___

### findIndices

▸ **findIndices**(`el`, `arr`): `number`[]

Find all indices of an item in an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `any` |
| `arr` | `any`[] |

#### Returns

`number`[]

**`Example`**

```ts
findIndices(1, [ 1, 2, 1 ]) // => [ 0, 2 ]
```

#### Defined in

[find-indices.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/find-indices.ts#L7)

___

### findPort

▸ **findPort**(`port`, `cb`): `void`

Find next open port

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `cb` | (`x`: ``null`` \| `Error`, `y?`: `number`) => `void` |

#### Returns

`void`

**`Example`**

```ts
findPort(8000, (err, port) => console.log(`${port} is open`))
```

#### Defined in

[find-port.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/find-port.ts#L13)

___

### flattenAndUniq

▸ **flattenAndUniq**\<`T`\>(`arr`): `T`[]

Recursively flatten arrays
then uniq what's left

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

**`Example`**

```ts
flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ]]) // =>  [ 1, 2, 3 ]
```

#### Defined in

[flatten-and-uniq.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/flatten-and-uniq.ts#L10)

___

### flip

▸ **flip**(`f`): (...`args`: `any`[]) => `any`

Flips order of received arguments and calls f.

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (...`xs`: `any`[]) => `any` |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

**`Example`**

```ts
const minus = (a, b) => a - b
minus(2, 1) // => 1
flip(minus)(2, 1) // => -1
```

#### Defined in

[flip.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/flip.ts#L9)

___

### fold

▸ **fold**\<`T`\>(`f`, `a`): `T`

Applies f to first two items of list,
then to next, etc.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`x`: `T`, `y`: `T`) => `T` |
| `a` | `T`[] |

#### Returns

`T`

**`Example`**

```ts
foldl1(increment, [ 1, 1, 1 ]) // => 3
```

#### Defined in

[fold.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/fold.ts#L8)

___

### getFreeDisk

▸ **getFreeDisk**(): `number`

Get free disk space

#### Returns

`number`

**`Example`**

```ts
getFreeDisk()
```

#### Defined in

[get-free-disk.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-free-disk.ts#L9)

___

### getFreeMemory

▸ **getFreeMemory**(): `number`

Get free memory

#### Returns

`number`

**`Example`**

```ts
getFreeMemory()
```

#### Defined in

[get-free-memory.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-free-memory.ts#L9)

___

### getGlobal

▸ **getGlobal**(): `undefined` \| typeof `globalThis`

Gets the global for your current context.

#### Returns

`undefined` \| typeof `globalThis`

**`Example`**

```ts
getGlobal() // => window, global, whatever
```

#### Defined in

[get-global.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-global.ts#L7)

___

### getHashFromDate

▸ **getHashFromDate**(): `string`

Returns a hash based on current timestamp

#### Returns

`string`

**`Example`**

```ts
getHashFromDate()
```

#### Defined in

[get-hash-from-date.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-hash-from-date.ts#L7)

___

### getHashFromSystem

▸ **getHashFromSystem**(): `string`

Get a md5 hash based on hostname, process.ppid, and date

#### Returns

`string`

**`Example`**

```ts
getHashFromSystem()
```

#### Defined in

[get-hash-from-system.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-hash-from-system.ts#L10)

___

### getKeyByValue

▸ **getKeyByValue**(`value`, `object`): `undefined` \| `string`

Get the key for a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `object` | [`AnyMap`](#anymap) |

#### Returns

`undefined` \| `string`

**`Example`**

```ts
getKeyByValue('bar', { foo: 'bar' }) // => 'foo'
```

#### Defined in

[get-key-by-value.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-key-by-value.ts#L9)

___

### getLoadAverage

▸ **getLoadAverage**(): `number`

Get load average

#### Returns

`number`

**`Example`**

```ts
getLoadAverage()
```

#### Defined in

[get-load-average.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-load-average.ts#L10)

___

### getMemoryUsage

▸ **getMemoryUsage**(): `number`

Get memory usage

#### Returns

`number`

**`Example`**

```ts
getMemoryUsage()
```

#### Defined in

[get-memory-usage.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-memory-usage.ts#L9)

___

### getOrdinal

▸ **getOrdinal**(`n`): `string`

Adds ordinal onto integer

Works up to 999

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`string`

**`Example`**

```ts
getOrdinal(1) // => '1st'
```

#### Defined in

[get-ordinal.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-ordinal.ts#L9)

___

### getProjectRoot

▸ **getProjectRoot**(): `string`

Get project root

#### Returns

`string`

**`Example`**

```ts
getProjectRoot() // /path/to/project
```

#### Defined in

[get-project-root.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-project-root.ts#L10)

___

### getRegexFlags

▸ **getRegexFlags**(`r`): `string`[]

Returns the flags for a given regular expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `RegExp` |

#### Returns

`string`[]

**`Example`**

```ts
getRegexFlags(/foo/ig) // => [ 'g', 'i' ]
```

#### Defined in

[get-regex-flags.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-regex-flags.ts#L7)

___

### getStdin

▸ **getStdin**(`f`): `void`

Get stdin and do something with it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `string`) => `void` |

#### Returns

`void`

**`Example`**

```ts
getStdin((str) => {
  console.log(str.split(''))
})
```

#### Defined in

[get-stdin.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-stdin.ts#L9)

___

### getTerminalColumns

▸ **getTerminalColumns**(): `number`

Get columns of current terminal

#### Returns

`number`

**`Example`**

```ts
getTerminalColumns()
```

#### Defined in

[get-terminal-columns.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-terminal-columns.ts#L7)

___

### getTerminalRows

▸ **getTerminalRows**(): `number`

Get current terminal rows

#### Returns

`number`

**`Example`**

```ts
getTerminalRows()
```

#### Defined in

[get-terminal-rows.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-terminal-rows.ts#L7)

___

### getTerminalSize

▸ **getTerminalSize**(): [`Size`](interfaces/Size.md)

Returns size of the current terminal

#### Returns

[`Size`](interfaces/Size.md)

**`Example`**

```ts
getTerminalSize() // => { columns: number, rows: number }
```

#### Defined in

[get-terminal-size.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-terminal-size.ts#L9)

___

### getUserHome

▸ **getUserHome**(): `string`

Get current user's home directory

#### Returns

`string`

**`Example`**

```ts
getUserHome() // => /home/z
```

#### Defined in

[get-user-home.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-user-home.ts#L11)

___

### getUserShell

▸ **getUserShell**(): `string`

Get the current user's shell, or
an empty string on shell-less platforms

#### Returns

`string`

**`Example`**

```ts
getUserShell()
```

#### Defined in

[get-user-shell.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/get-user-shell.ts#L8)

___

### greater

▸ **greater**(`a`, `b`): `number`

Get the greater of two numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

**`Example`**

```ts
greater(1, 2) // => 2
```

#### Defined in

[greater.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/greater.ts#L7)

___

### groupBy

▸ **groupBy**(`p`): (`a`: `any`[]) => [`AnyMap`](#anymap)

Collect an an array of objects by string key

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`fn`

▸ (`a`): [`AnyMap`](#anymap)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any`[] |

##### Returns

[`AnyMap`](#anymap)

**`Example`**

```ts
const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
groupBy('foo')(data) // => { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
```

#### Defined in

[group-by.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/group-by.ts#L10)

___

### has

▸ **has**(`p`, `o`): `boolean`

See if an object has a property

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |
| `o` | [`AnyMap`](#anymap) |

#### Returns

`boolean`

**`Example`**

```ts
has('a' { b: 'c' }) // => false
```

#### Defined in

[has.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/has.ts#L9)

___

### hasColor

▸ **hasColor**(): `boolean`

Returns true if the current terminal supports color

#### Returns

`boolean`

**`Example`**

```ts
hasColor()
```

#### Defined in

[has-color.ts:14](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/has-color.ts#L14)

___

### hasDuplicate

▸ **hasDuplicate**\<`T`\>(`arr`): `boolean`

Returns true if an array has any
duplicate elements

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`boolean`

**`Example`**

```ts
hasDuplicate([ 1, 1, 2 ]) // => true
```

#### Defined in

[has-duplicate.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/has-duplicate.ts#L8)

___

### head

▸ **head**\<`T`\>(`arr`): `T`

First element

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`

**`Example`**

```ts
head([ 1, 2, 3 ]) // => 1
```

#### Defined in

[head.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/head.ts#L7)

___

### id

▸ **id**\<`A`\>(`a`): `A`

`id`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`A`

**`Example`**

```ts
id(1) // => 1
id() // => undefined
```

#### Defined in

[id.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/id.ts#L8)

___

### init

▸ **init**(`arr`): `any`[]

Returns all but the last item of an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |

#### Returns

`any`[]

**`Example`**

```ts
init([ 1, 2, 3 ]) // => [ 1, 2 ]
```

#### Defined in

[init.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/init.ts#L7)

___

### initials

▸ **initials**(`str`): `string`

Trims a string to just caps

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

**`Example`**

```ts
initials('Zac Anger') // => 'ZA'
```

#### Defined in

[initials.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/initials.ts#L7)

___

### intersection

▸ **intersection**\<`T`\>(`xs`, `ys`): `T`[]

Get the intersection of two arrays

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `T`[] |
| `ys` | `T`[] |

#### Returns

`T`[]

**`Example`**

```ts
intersection([ 1, 2 ], []) // => []
intersection([ 1, 2, 3 ], [1, 2]) // => [ 1, 2 ]
```

#### Defined in

[intersection.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/intersection.ts#L8)

___

### is

▸ **is**(`t`, `val`): `boolean`

Returns true if the value is of the type

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |
| `val` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
is('number', 2) // => true
```

#### Defined in

[is.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is.ts#L7)

___

### isArrayLike

▸ **isArrayLike**(`v`): `boolean`

Returns true if the passed value is array-like

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isArrayLike({}) // => false
isArrayLike([ 1, 2 ]) // => true
```

#### Defined in

[is-array-like.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-array-like.ts#L10)

___

### isBetween

▸ **isBetween**(`a`, `b`, `mid`): `boolean`

Returns true if the last parameter is before the first and second parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `mid` | `number` |

#### Returns

`boolean`

**`Example`**

```ts
isBetween(1, 3, 2) // => true
isBetween(2, 1, 2) // => false
```

#### Defined in

[is-between.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-between.ts#L11)

___

### isBoolean

▸ **isBoolean**(`v`): `boolean`

Returns true if the value is a boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isBoolean(true) // => true
```

#### Defined in

[is-boolean.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-boolean.ts#L7)

___

### isClass

▸ **isClass**(`fn`): `boolean`

Returns true if passed fn is an ES2015 class

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `any` |

#### Returns

`boolean`

**`Example`**

```ts
isClass(noop) // => false
```

#### Defined in

[is-class.ts:12](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-class.ts#L12)

___

### isDate

▸ **isDate**(`v`): `boolean`

Returns true if the value is a date

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isDate(new Date()) // => true
```

#### Defined in

[is-date.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-date.ts#L9)

___

### isDefined

▸ **isDefined**(`v`): `boolean`

Returns true if the value is defined

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isDefined(null) // => true
```

#### Defined in

[is-defined.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-defined.ts#L7)

___

### isDirectory

▸ **isDirectory**(`filePath`): `Promise`\<`boolean`\>

Returns true if the path is a directory

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

```ts
await isDirectory('.') // => true
await isDirectory('./fake-path') // => false
```

#### Defined in

[is-directory.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-directory.ts#L11)

___

### isEmpty

▸ **isEmpty**(`v`): `boolean`

Returns true if the value is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isEmpty('') // => true
isEmpty({}) // => true
isEmpty([]) // => true
isEmpty(null) // => true
```

#### Defined in

[is-empty.ts:14](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-empty.ts#L14)

___

### isError

▸ **isError**(`a`): `boolean`

Returns true if value is an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isError(new Error()) // => true
```

#### Defined in

[is-error.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-error.ts#L9)

___

### isEven

▸ **isEven**(`n`): `boolean`

Returns true if the number is even

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

**`Example`**

```ts
isEven(2) // => true
```

#### Defined in

[is-even.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-even.ts#L7)

___

### isFile

▸ **isFile**(`filePath`): `Promise`\<`boolean`\>

Returns true if the path is a file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

```ts
isFile('./README.md') // => true
isFile('.') // => false
```

#### Defined in

[is-file.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-file.ts#L11)

___

### isFloat

▸ **isFloat**(`n`): `boolean`

Returns true if the number is a float

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

**`Example`**

```ts
isFloat(2) // => false
isFloat(2.2) // => true
```

#### Defined in

[is-float.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-float.ts#L8)

___

### isFunction

▸ **isFunction**(`v`): `boolean`

Returns true if the value is a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
const noop = () => {}
isFunction(2) // => false
isFunction(noop) // => true
```

#### Defined in

[is-function.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-function.ts#L9)

___

### isGenerator

▸ **isGenerator**(`v`): `boolean`

Returns true if passed val is a generator

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isGenerator(2) // => false
```

#### Defined in

[is-generator.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-generator.ts#L7)

___

### isGeneratorFunction

▸ **isGeneratorFunction**(`v`): `boolean`

Returns true if val is a generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isGeneratorFunction(2) // => false
```

#### Defined in

[is-generator-function.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-generator-function.ts#L7)

___

### isInstalled

▸ **isInstalled**(`pkgName`): `boolean`

Returns true if the passed node_module name is installed

#### Parameters

| Name | Type |
| :------ | :------ |
| `pkgName` | `string` |

#### Returns

`boolean`

**`Example`**

```ts
isInstalled('zeelib') // => true
```

#### Defined in

[is-installed.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-installed.ts#L7)

___

### isInteger

▸ **isInteger**(`v`): `boolean`

Returns true if the value is an integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isInteger(2) // => true
isInteger(1.1) // => false
```

#### Defined in

[is-integer.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-integer.ts#L8)

___

### isJson

▸ **isJson**(`str`): `boolean`

Returns true if the string is valid JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

**`Example`**

```ts
isJson(JSON.stringify({ a: 'b' })) // => true
```

#### Defined in

[is-json.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-json.ts#L7)

___

### isMap

▸ **isMap**(`v`): `boolean`

Returns true if value is a map

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isMap(new Map()) // => true
```

#### Defined in

[is-map.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-map.ts#L9)

___

### isNode

▸ **isNode**(): `boolean`

Returns true if code is in Node

#### Returns

`boolean`

**`Example`**

```ts
isNode()
```

#### Defined in

[is-node.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-node.ts#L7)

___

### isNull

▸ **isNull**(`v`): `boolean`

Returns true if the value is null

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isNull(null) // => true
```

#### Defined in

[is-null.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-null.ts#L7)

___

### isNullOrUndefined

▸ **isNullOrUndefined**(`v`): `boolean`

Returns true if the value is null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isNullOrUndefined(null) // => true
```

#### Defined in

[is-null-or-undefined.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-null-or-undefined.ts#L10)

___

### isNumber

▸ **isNumber**(`v`): `boolean`

Returns true if the value is a number and is not NaN

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isNumber(2) // => true
isNumber(NaN) // => false
```

#### Defined in

[is-number.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-number.ts#L8)

___

### isObject

▸ **isObject**(`v`): `boolean`

Returns true if the value is an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isObject('asdf') // => false
```

#### Defined in

[is-object.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-object.ts#L7)

___

### isOdd

▸ **isOdd**(`n`): `boolean`

Returns true if the number is odd

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`boolean`

**`Example`**

```ts
isOdd(1) // => true
```

#### Defined in

[is-odd.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-odd.ts#L7)

___

### isPrimitive

▸ **isPrimitive**(`v`): `boolean`

Returns true if value is a primitive

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isPrimitive(1) // => true
```

#### Defined in

[is-primitive.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-primitive.ts#L7)

___

### isPromise

▸ **isPromise**(`a`): `boolean`

Returns true if value is a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isPromise(Promise.resolve())
```

#### Defined in

[is-promise.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-promise.ts#L7)

___

### isRegExp

▸ **isRegExp**(`v`): `boolean`

Returns true if value is a RegExp

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isRegExp(/a/) // => true
```

#### Defined in

[is-reg-exp.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-reg-exp.ts#L9)

___

### isRoot

▸ **isRoot**(): `boolean`

Check if current process is running as root.

#### Returns

`boolean`

**`Example`**

```ts
isRoot() // => true
```

#### Defined in

[is-root.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-root.ts#L7)

___

### isSemver

▸ **isSemver**(`v`): `boolean`

Returns true if the provided string is a valid semantic version

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`boolean`

**`Example`**

```ts
isSemver("0.0.0") // => true
isSemver("0.") // => false
```

#### Defined in

[is-semver.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-semver.ts#L8)

___

### isSet

▸ **isSet**(`v`): `boolean`

Returns true if value is a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isSet(new Set()) // => true
```

#### Defined in

[is-set.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-set.ts#L9)

___

### isString

▸ **isString**(`v`): `boolean`

Returns true if value is a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isString('a') // => true
```

#### Defined in

[is-string.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-string.ts#L7)

___

### isSymLink

▸ **isSymLink**(`filePath`): `Promise`\<`boolean`\>

Returns true if path is a symlink

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

```ts
isSymLink('.') // => false
```

#### Defined in

[is-sym-link.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-sym-link.ts#L10)

___

### isSymbol

▸ **isSymbol**(`a`): `boolean`

Returns true if value is a symbol

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isSymbol(Symbol.for('foo')) // => true
```

#### Defined in

[is-symbol.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-symbol.ts#L7)

___

### isUndefined

▸ **isUndefined**(`v`): `boolean`

Returns true if value is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

**`Example`**

```ts
isUndefined(undefined) // => true
```

#### Defined in

[is-undefined.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-undefined.ts#L7)

___

### isValidDate

▸ **isValidDate**(`d`): `boolean`

Returns true if the passed object is a valid Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `Date` |

#### Returns

`boolean`

**`Example`**

```ts
isValidDate('1234') // => false
```

#### Defined in

[is-valid-date.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/is-valid-date.ts#L9)

___

### keep

▸ **keep**(`x`): [`R`](#r-1)

Returns an array or object with all falsey values removed

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`R`](#r-1) |

#### Returns

[`R`](#r-1)

**`Example`**

```ts
keep([ 'a', null, '', 2]) // => [ 'a', 2 ]
keep({ a: '', b: null, c: 2 }) // => { c: 2 }
```

#### Defined in

[keep.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/keep.ts#L13)

___

### last

▸ **last**\<`A`\>(`arr`): `A`

Returns the last element of the array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `A`[] |

#### Returns

`A`

**`Example`**

```ts
last([ 1, 2, 3 ]) // => 3
```

#### Defined in

[last.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/last.ts#L7)

___

### len

▸ **len**(`val`): `number`

Get length of element

Works for array, object, string, set, map, and function

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`number`

**`Example`**

```ts
len('foo') // => 3
len([ 1, 2 ]) => 2
len((a, b) => a + b) // => 2
```

#### Defined in

[len.ts:19](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/len.ts#L19)

___

### lesser

▸ **lesser**(`a`, `b`): `number`

Returns the lesser of two numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

**`Example`**

```ts
lesser(1, 2) // => 1
```

#### Defined in

[lesser.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/lesser.ts#L7)

___

### lightenOrDarken

▸ **lightenOrDarken**(`col`, `amt`): `string`

Lighten or darken a color

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | `string` |
| `amt` | `number` |

#### Returns

`string`

**`Example`**

```ts
// lighten
const newCol = lightenOrDarken('#F06D06', 20)
// darken
const newCol = lightenOrDarken('#F06D06', -20)
```

#### Defined in

[lighten-or-darken.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/lighten-or-darken.ts#L10)

___

### lines

▸ **lines**(`str`): `string`[]

Split a string on lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

**`Example`**

```ts
lines('foo\nbar') // => [ 'foo', 'bar' ]
```

#### Defined in

[lines.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/lines.ts#L7)

___

### mapObject

▸ **mapObject**(`f`, `o`, `ctx?`): [`AnyMap`](#anymap)

Map for objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`, `b`: `string`, `c`: `any`) => `any` |
| `o` | [`AnyMap`](#anymap) |
| `ctx` | `any` |

#### Returns

[`AnyMap`](#anymap)

**`Example`**

```ts
const f = (a) => a + ' world'
const d = { a: 'hello', b: 'sup' }
mapObject(f, d) // => { a: 'hello world', b: 'sup world' }
```

#### Defined in

[map-object.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/map-object.ts#L11)

___

### memoize

▸ **memoize**(`fn`): `any`

A simple memoizing util

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `any` |

#### Returns

`any`

**`Example`**

```ts
memoize((a) => a) // => [Function]
memoize((a) => a)(1) // => 1
```

#### Defined in

[memoize.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/memoize.ts#L8)

___

### mzero

▸ **mzero**(`v?`): `any`

Get monadic empty/zero value for a type

#### Parameters

| Name | Type |
| :------ | :------ |
| `v?` | `any` |

#### Returns

`any`

**`Example`**

```ts
mzero(1) // =>
mzero([1]) // => []
```

#### Defined in

[mzero.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/mzero.ts#L10)

___

### objectToString

▸ **objectToString**(`v`): `string`

`toString`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`string`

**`Example`**

```ts
objectToString({}) // => '[object Object]'
```

#### Defined in

[object-to-string.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/object-to-string.ts#L7)

___

### once

▸ **once**\<`U`\>(`fn`): (...`args`: `U`[]) => `U`

Only calls fn once; subsequent calls just return first val

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | \<T\>(...`args`: `T`[]) => `T` |

#### Returns

`fn`

▸ (`...args`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `U`[] |

##### Returns

`U`

**`Example`**

```ts
const o = once(id)
o(1) // => 1
o() // => 1
o(2) // => 1
```

#### Defined in

[once.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/once.ts#L10)

___

### open

▸ **open**(`args`, `opts`, `cb`): `void`

Opens things. Works on Linux, Mac, and Windows

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string` |
| `opts` | [`AnyMap`](#anymap) |
| `cb` | [`Cb`](#cb) |

#### Returns

`void`

**`Example`**

```ts
open('http://zacanger.com')
```

#### Defined in

[open.ts:12](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/open.ts#L12)

___

### pick

▸ **pick**(`ks`, `o`): [`AnyMap`](#anymap)

`pick`
as it is in rambda (not ramda)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ks` | `string` \| `string`[] |
| `o` | [`AnyMap`](#anymap) |

#### Returns

[`AnyMap`](#anymap)

**`Example`**

```ts
pick('a', { a: 'a', b: 'b' }) // => { a: 'a' }
pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }) // => { a: 'a', b: 'b' }
```

#### Defined in

[pick.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/pick.ts#L11)

___

### pipe

▸ **pipe**\<`T`\>(`...fns`): (`data`: `T`) => `T`

Left to right composition

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...fns` | [`AnyFn`](#anyfn)[] |

#### Returns

`fn`

▸ (`data`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`T`

**`Example`**

```ts
const addOne = (a) => a + 1
const timesTwo = (a) => a * 2
pipe(addOne, timesTwo)(2) // => 6
```

#### Defined in

[pipe.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/pipe.ts#L13)

___

### pluck

▸ **pluck**(`key`, `arr`): `any`[]

Simple `pluck`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `arr` | `any`[] |

#### Returns

`any`[]

**`Example`**

```ts
pluck('a', [ { a: 'a' }, { a: 'b' } ]) // => [ 'a', 'b' ]
```

#### Defined in

[pluck.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/pluck.ts#L7)

___

### product

▸ **product**(`nums`): `number`

Get the product of a list of numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `nums` | `number`[] |

#### Returns

`number`

**`Example`**

```ts
product([ 1, 2, 3, 4 ]) // => 24
```

#### Defined in

[product.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/product.ts#L7)

___

### prompt

▸ **prompt**(`question`): `Promise`\<`string`\>

Create a simple prompt for the terminal

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

`Promise`\<`string`\>

**`Example`**

```ts
const answer = await prompt('Do the thing')
if (answer.toLowercase() === 'y') { doTheThing() }
```

#### Defined in

[prompt.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/prompt.ts#L11)

___

### range

▸ **range**(`a`, `b`, `step?`): `number`[]

Range function

Takes a start and and end,
and a step (defaults to 1).

This is _inclusive_. That is:
`1..10,2 == 0,2,4,6,8,10`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `step` | `number` | `1` |

#### Returns

`number`[]

**`Example`**

```ts
range(1, 4) // => [ 1, 2, 3, 4 ]
range(1, 10, 3) // => [ 1, 4, 7, 10 ]
```

#### Defined in

[range.ts:14](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/range.ts#L14)

___

### readJson

▸ **readJson**(`file`): `Promise`\<`any`[] \| [`AnyMap`](#anymap)\>

Read json file and parse it

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`\<`any`[] \| [`AnyMap`](#anymap)\>

**`Example`**

```ts
const json = await readJson('./foo.json')
```

#### Defined in

[read-json.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/read-json.ts#L10)

___

### reduce

▸ **reduce**\<`A`, `B`\>(`fn`, `initialValue`, `data`): `B`

Reduce

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`b`: `B`, `a`: `A`) => `B` |
| `initialValue` | `B` |
| `data` | `A`[] |

#### Returns

`B`

**`Example`**

```ts
reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]) // => 10
```

#### Defined in

[reduce.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/reduce.ts#L7)

___

### removeBOM

▸ **removeBOM**(`content`): `string`

The same as what's in Node's `module` (see `lib/internal/module`).
Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
because the buffer-to-string conversion in `fs.readFileSync()`
translates it to FEFF, the UTF-16 BOM.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`string`

**`Example`**

```ts
removeBOM(someContent)
```

#### Defined in

[remove-bom.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/remove-bom.ts#L10)

___

### replicate

▸ **replicate**\<`A`\>(`n`, `p`): `A`[]

Generates an array of the length of the first param,
filled with the second param, calling the second param
if it's a function

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `p` | `A` \| (`n`: `number`, `i`: `number`) => `A` |

#### Returns

`A`[]

**`Example`**

```ts
replicate(3, 10) // => [ 10, 10, 10 ]
replicate(4, (a) => a + 1) // => [ 5, 5, 5, 5 ]
```

#### Defined in

[replicate.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/replicate.ts#L10)

___

### rgbToHex

▸ **rgbToHex**(`r`, `g`, `b`): `string`

Convert rgb to hex

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

`string`

**`Example`**

```ts
rgbToHex(255, 255, 255) // => '#ffffff'
```

#### Defined in

[rgb-to-hex.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/rgb-to-hex.ts#L7)

___

### safeGet

▸ **safeGet**\<`A`\>(`path`, `fallback?`): (`obj`: [`AnyMap`](#anymap)) => `undefined` \| ``null`` \| `A`

Like `_.get`: takes an access string and an optional fallback,
then an object

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `fallback?` | `A` |

#### Returns

`fn`

▸ (`obj`): `undefined` \| ``null`` \| `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`AnyMap`](#anymap) |

##### Returns

`undefined` \| ``null`` \| `A`

**`Example`**

```ts
safeGet('a.b.c')({ a: { b: { c: 'd' } } }) // => 'd'
safeGet('a.b.e')({ a: { b: { c: 'd' } } }) // => undefined
safeGet('a.b.e', 'f')({ a: { b: { c: 'd' } } }) // => 'f'
```

#### Defined in

[safe-get.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/safe-get.ts#L13)

___

### scaleToFit

▸ **scaleToFit**(`width`, `height`, `maxWidth?`, `maxHeight?`): `Object`

Takes a width, height, maxWidth, and maxHeight

Returns an object that tells you the largest you can
scale to

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `maxWidth?` | `number` |
| `maxHeight?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

**`Example`**

```ts
scaleToFit(1400, 1200, 2000, 200) // => { width: 233.33333333333331, height: 200 }
```

#### Defined in

[scale-to-fit.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/scale-to-fit.ts#L10)

___

### shuffle

▸ **shuffle**\<`A`\>(`arr`): `A`[]

Randomly shuffle items in array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
shuffle([ 1, 2, 3, 4 ])
```

#### Defined in

[shuffle.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/shuffle.ts#L7)

___

### sleep

▸ **sleep**(`ms`): `Promise`\<`void`\>

Simple sleep.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`\<`void`\>

**`Example`**

```ts
const delay = await sleep(1000)
sleep(1000).then(doAThing)
```

#### Defined in

[sleep.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/sleep.ts#L8)

___

### sortBy

▸ **sortBy**\<`A`\>(`f`, `xs`): `A`[]

Takes a sort fn and an array

Returns a sorted array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `number` |
| `xs` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
const list = [ { id: 1 }, { id: 3 }, { id: 2 } ]
sortBy(({ id }) => id, list) // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
```

#### Defined in

[sort-by.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/sort-by.ts#L10)

___

### sortObject

▸ **sortObject**(`o`): [`AnyMap`](#anymap)

Sort an object (recursively)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`AnyMap`](#anymap) |

#### Returns

[`AnyMap`](#anymap)

**`Example`**

```ts
sortObject({ b: 'c', a: 'd' }) // => { a: 'd', b: 'c' }
```

#### Defined in

[sort-object.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/sort-object.ts#L10)

___

### span

▸ **span**\<`A`\>(`pred`, `arr`): [`A`[], `A`[]]

Similar to `takeWhile`: returns a tuple
of all elements that pass predicate
and all elements that did not

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`a`: `A`) => `boolean` |
| `arr` | `A`[] |

#### Returns

[`A`[], `A`[]]

**`Example`**

```ts
span(lessThanThree, [ 1, 2, 3, 4 ]) // => [ [ 1, 2 ], [ 3, 4 ] ]
```

#### Defined in

[span.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/span.ts#L11)

___

### splitAt

▸ **splitAt**\<`A`\>(`num`, `arr`): [`A`[], `A`[]]

Like Haskell's `splitAt`

splitAt n xs returns a tuple xs prefix of length n
and second element is remainder of list

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `arr` | `A`[] |

#### Returns

[`A`[], `A`[]]

**`Example`**

```ts
splitAt(1, [ [ 'a', 'b' ], 'c' ]) // => [ [ [ 'a', 'b' ] ], [ 'c' ] ]
```

#### Defined in

[split-at.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/split-at.ts#L13)

___

### store

▸ **store**(`state?`): [`Store`](interfaces/Store.md)

A very simple store implementation (think Redux-like)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`AnyMap`](#anymap) |

#### Returns

[`Store`](interfaces/Store.md)

**`Example`**

```ts
const state = store()
state.subscribe((next, prev) => next.foo)
state.update({ foo: 'bar' })
```

#### Defined in

[store.ts:20](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/store.ts#L20)

___

### stripAnsi

▸ **stripAnsi**(`s?`): `string`

Remove ANSI escapes from string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `''` |

#### Returns

`string`

**`Example`**

```ts
stripAnsi(colorize.blue('hello')) // => 'hello'
```

#### Defined in

[strip-ansi.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/strip-ansi.ts#L7)

___

### sub

▸ **sub**(`ns`): `number`

Subtract any amount of numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `ns` | `number`[] |

#### Returns

`number`

**`Example`**

```ts
sub([ 4, 3, 2, 1 ]) // => -2
```

#### Defined in

[sub.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/sub.ts#L7)

___

### sum

▸ **sum**(`nums`): `number`

Sum an array of numbers

#### Parameters

| Name | Type |
| :------ | :------ |
| `nums` | `number`[] |

#### Returns

`number`

**`Example`**

```ts
sum([ 1, 2, 3, 4 ]) // => 10
```

#### Defined in

[sum.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/sum.ts#L7)

___

### tail

▸ **tail**\<`T`\>(`arr`): `T`[]

All elements except first

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

**`Example`**

```ts
tail([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
```

#### Defined in

[tail.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/tail.ts#L7)

___

### take

▸ **take**\<`A`\>(`n`, `a`): `A`[]

Like Haskell's `take`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `a` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
take(2, [ 1, 2, 3 ]) // => [ 1, 2 ]
```

#### Defined in

[take.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/take.ts#L7)

___

### takeLast

▸ **takeLast**\<`A`\>(`num`, `arr`): `A`[]

Takes the last n items of array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `arr` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
takeLast(2, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
```

#### Defined in

[take-last.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/take-last.ts#L7)

___

### takeWhile

▸ **takeWhile**\<`A`\>(`pred`, `arr`): `A`[]

Returns elements that pass predicate,
until failure (ignores matches after failure)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`a`: `A`, `n`: `number`) => `boolean` |
| `arr` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
takeWhile((x) => x < 3, [ 1, 2, 3, 4 ]) // => [ 1, 2 ]
```

#### Defined in

[take-while.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/take-while.ts#L8)

___

### tap

▸ **tap**(`msg`): \<A\>(`a`: `A`) => `A`

Log a value to console, and return that value

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`fn`

▸ \<`A`\>(`a`): `A`

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`A`

**`Example`**

```ts
const logger = tap('This is the thing!')
logger(2) // => this is the thing 2 ; 2
```

#### Defined in

[tap.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/tap.ts#L8)

___

### touch

▸ **touch**(`filePath`, `contents?`): `Promise`\<`void`\>

Make a file if it doesn't exist already

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filePath` | `string` | `undefined` |
| `contents` | `string` | `''` |

#### Returns

`Promise`\<`void`\>

**`Example`**

```ts
touch('foo.txt')
touch('foo.txt', 'contentx')
```

#### Defined in

[touch.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/touch.ts#L11)

___

### truncate

▸ **truncate**(`str`, `limit`, `tail?`): `string`

Truncate a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `limit` | `number` | `undefined` |
| `tail` | `string` | `'…'` |

#### Returns

`string`

**`Example`**

```ts
truncate('asdf asdf asdf asdf', 4) // => 'asd…'
truncate('asdf asdf asdf asdf', 8, ' etc.') // => 'asd etc.'
```

#### Defined in

[truncate.ts:8](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/truncate.ts#L8)

___

### tryJson

▸ **tryJson**\<`T`\>(`o`): [`AnyMap`](#anymap) \| `T`

Tries to parse JSON, if is JSON

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

[`AnyMap`](#anymap) \| `T`

**`Example`**

```ts
tryJson('[1,2]') // => [ 1, 2 ]
tryJson([ 1, 2 ]) // => [ 1, 2 ]
```

#### Defined in

[try-json.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/try-json.ts#L10)

___

### typeOf

▸ **typeOf**(`a`): `string`

Enhanced `typeof`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`string`

**`Example`**

```ts
typeOf('a') // => 'string'
typeOf(new Date()) // => 'date'
```

#### Defined in

[type-of.ts:13](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/type-of.ts#L13)

___

### union

▸ **union**\<`A`\>(`...xs`): `A`[]

Get the union of any amount of arrays

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...xs` | `A`[][] |

#### Returns

`A`[]

**`Example`**

```ts
union([ 1, 2, 3 ], [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
```

#### Defined in

[union.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/union.ts#L9)

___

### uniq

▸ **uniq**\<`A`\>(`arr`): `A`[]

Uniq an array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `A`[] |

#### Returns

`A`[]

**`Example`**

```ts
uniq([ 1, 1, 2, 3 ]) // => [ 1, 2, 3 ]
```

#### Defined in

[uniq.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/uniq.ts#L7)

___

### uniqBy

▸ **uniqBy**(`el`, `xs`): [`AnyMap`](#anymap)[]

Unique an array by a string key of objects in array
Returns only the values of the passed key

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` |
| `xs` | [`AnyMap`](#anymap)[] |

#### Returns

[`AnyMap`](#anymap)[]

**`Example`**

```ts
const a = [ { foo: 'foo' }, { foo: 'bar' }, { foo: 'foo' } ]
uniqBy('foo', a) // => [ { foo: 'foo' }, { foo: 'bar' } ]
```

#### Defined in

[uniq-by.ts:11](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/uniq-by.ts#L11)

___

### unless

▸ **unless**\<`A`\>(`cond`, `fn`): ``null`` \| `A`

Call a function if the condition is falsey

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | `boolean` |
| `fn` | () => `A` |

#### Returns

``null`` \| `A`

**`Example`**

```ts
unless(() => true, false) // => true
```

#### Defined in

[unless.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/unless.ts#L7)

___

### unlines

▸ **unlines**(`arr`): `string`

Join an array with lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |

#### Returns

`string`

**`Example`**

```ts
unlines([ 'foo', 'bar' ]) // => 'foo\nbar'
```

#### Defined in

[unlines.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/unlines.ts#L7)

___

### until

▸ **until**\<`T`\>(`p`, `f`): (...`args`: `T`[]) => `T`

Until p f yields result of applying f until p holds

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | (`x`: `T`) => `boolean` |
| `f` | (...`args`: `T`[]) => `T` |

#### Returns

`fn`

▸ (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

##### Returns

`T`

**`Example`**

```ts
until(equals5, increment)(2) // => 5
```

#### Defined in

[until.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/until.ts#L7)

___

### unwords

▸ **unwords**(`arr`): `string`

Join an array with spaces

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |

#### Returns

`string`

**`Example`**

```ts
unwords([ 'foo', bar ]) // => 'foo bar'
```

#### Defined in

[unwords.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/unwords.ts#L7)

___

### watch

▸ **watch**(`filePath`, `cb`): `void`

Watch a file for changes, and call the function

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `cb` | (`event`: `string`, `filename`: ``null`` \| `string`) => `void` |

#### Returns

`void`

**`Example`**

```ts
watch('./foo', console.log)
```

#### Defined in

[watch.ts:10](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/watch.ts#L10)

___

### words

▸ **words**(`str`): `string`[]

Split a string on spaces

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

**`Example`**

```ts
words('foo bar') // => [ 'foo', 'bar' ]
```

#### Defined in

[words.ts:7](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/words.ts#L7)

___

### writeJson

▸ **writeJson**(`path`, `data`, `indent`): `Promise`\<`void`\>

Write JSON from a stringifiable value

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `any` |
| `indent` | `number` |

#### Returns

`Promise`\<`void`\>

**`Example`**

```ts
await writeJson('foo.json', someObject, 4)
```

#### Defined in

[write-json.ts:9](https://github.com/zacanger/zeelib/blob/bcae594a50ea16068c01ee8341f7d20a90a70ede/src/write-json.ts#L9)
</details>
