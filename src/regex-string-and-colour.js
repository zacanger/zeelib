/* eslint-disable no-useless-escape */

// removes html-like tags
export const removeTags = str =>
  str.replace(/(<([^>]+)>)/ig, '')

export const stripPunctuation = str =>
  str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ')

export const alphaNumericOnly = (str) =>
  str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')

// escapes html
export const escapeHTML = str =>
  str.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// unescapes escaped html
export const unescapeHTML = str =>
  str.replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')

// removes non-alphabetic chars
export const removeAlpha = str =>
  str.replace(/[^A-Za-z ]+/g, '')

// removes non-alpha-numeric chars
export const removeNonAlphanumeric = str =>
  str.replace(/[^A-Za-z0-9 ]+/g, '')

// removes non-numeric chars
export const removeNonNumeric = str =>
  str.replace(/[^0-9-.]/g, '')

// removes numeric chars
export const removeNumeric = str =>
  str.replace(/[0-9]/g, '')

// convert camelCase to lisp-case
export const camelCaseToLispCase = str => (
  str.replace(/[A-Z]/g, match => (
    '-' + match.toLowerCase())).toLowerCase()
)

// convert camelCase to snake_case
export const cameCaseToSnakeCase = str => (
  str.replace(/[A-Z]/g, match => (
    '_' + match.toLowerCase())).toLowerCase()
)

// convert lisp-case to camelCase
export const lispCaseToCamelCase = str => (
  str.toLowerCase().replace(/-[a-z]/g, match => (
    match.slice(1).toUpperCase()
  ))
)

// convert snake_case to camelCase
export const snakeCaseToCamelCase = str => (
  str.replace(/(_\w)/g, match => (
    match[1].toUpperCase())
  )
)

export const newlinesToSpaces = str =>
  str.replace(/\s+/g, ' ').trim()

export const newlineRemove = str =>
  str.replace(/(\r\n|\n|\r)/gm, '')

export const removeAllWhitespace = str =>
  str.replace(/^\s+|\s+$/, '')

// replaces newlines with spaces, for use in classNames
// also can take array of classnames, convert to string
// returns arg as string if it's not an array or a string
export const normalizeClassname = (arg) => {
  const replaceNewlines = (a) => a.replace(/\s+/g, ' ').trim()
  const replaceArr = (a) => a.map((i) => `${i}`).join(' ')
  if (Array.isArray(arg)) return replaceNewlines(replaceArr(arg))
  if (typeof arg === 'string') return replaceNewlines(arg)
  return replaceNewlines(`${arg}`)
}

// add \n to every line
export const addNewlines = s =>
  s.split('\t').join('  ').split('\n').map((e, i, a) => e + '\n')

export const isEmptyStr = str => {
  if (str === undefined || str === null) {
    return true
  }
  return (/^[ \t\s]*$/).test(str)
}

export const isAlphanumeric = str =>
  (/[0-9a-zA-Z]+/).test(str)

export const inlineString = str => {
  str = str.replace(/(\r\n|\n|\r)/gm, ' ')
  return str.replace(/[\s]+/gm, ' ')
}

export const minify = str =>
  str.replace(/\n/g, '').replace(/\s\s+/g, ' ')

// this is really long. i didn't write this. geez.
export const isMobileOrTablet = device =>
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(device) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(device.substr(0, 4))

// takes input in format #rrggbb (hex)
export const complimentaryCols = s =>
  '#' + (1e5 + (8 ** 8 + ~('0x' + s.slice(1))).toString(16)).slice(-6)
// or
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))

// close-to-complete email validation
export const isEmail = email =>
  /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email)

// base64 encodes
export const base64Encode = str =>
  new Buffer(str).toString('base64')

// base64 decodes
export const base64Decode = str =>
  new Buffer(str, 'base64').toString('utf8')

// capitalizes first char
export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1)

// colour utilities
export const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i

// takes string colour, returns string
export const trimHash = color =>
  typeof color === 'string' ? color.replace('#', '') : color

// takes string colour, returns string
export const trimSpaces = color =>
  typeof color === 'string' ? color.replace(/\s/g, '') : color

// takes string colour, returns bool
export const isHexBased = color =>
  hex.text(color)

// takes string colour, returns bool
export const isValidHex = color =>
  isHexBased(trimSpaces(color))

// takes string colour, returns either string or null
export const normalizeColor = color => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d)
  }
  return nextColor.toUpperCase()
}

// gives you a random colour
export const randomCol = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  const pad = '000000'
  return '#' + (pad + hex).slice(-pad.length)
}

// [Str] -> Str -> Bool
export const isStringSomewhereInArray = (arr, el) =>
  arr.some(a => el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase()))

// rot13
export function rot13 (s) {
  return (s || this).split('').map((_) => {
    if (!_.match(/[A-Za-z]/)) {
      return _
    }
    const c = Math.floor(_.charCodeAt(0) / 97)
    const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26
    return String.fromCharCode(k + ((c === 0) ? 64 : 96))
  }).join('')
}

// generates short uid
export const shortUid = () =>
  ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)

// i don't know why
export const otherShortUid = () =>
  (Math.random().toString(36) + '00000000000000000').slice(2, 10)

export const randomHex32 = (hexN = '') =>
  hexN.length < 32
    ? randomHex32(hexN + (Math.random() + Math.random()).toString(16).slice(2))
    : hexN.slice(0, 32)

// normalize text
export const normText = text =>
  text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig).join(' ')

export const randomString = (n = 8) =>
  Math.random().toString(36).substring(n)

// usage :
// lighten
// var NewColor = LightenDarkenColor('#F06D06', 20)
// darken
// var NewColor = LightenDarkenColor('#F06D06', -20)
export const LightenDarkenColor = (col, amt) => {
  let
    usePound = false
  , num      = parseInt(col, 16)
  , r        = (num >> 16) + amt
  , b        = ((num >> 8) & 0x00FF) + amt
  , g        = (num & 0x0000FF) + amt

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

// [RegExp] -> RegExp
export const combineRegex = (rs, opts) =>
  new RegExp(rs.map(r => r.source).join(''), opts)

// gh:sindresorhus/slash
export const windowsSlashes = str => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(str)
  const hasNonAscii = /[^\x00-\x80]+/.test(str)
  if (isExtendedLengthPath || hasNonAscii) return str
  return str.replace(/\\/g, '/')
}

export const cssToJson = str => (
  str
  .replace(/(\w*:)/g, '$1"')
  .replace(/[;]/g, '";')
  .replace(/(\'{2,})/g, '"')
  .replace(/;/g, ',')
  .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g, '"$2": ')
  .replace(/,\s*\}/, '}')
  .trim()
)

// gh:mathiasbynens/emoji-regex
export const isEmoji = (a) => // eslint-disable-next-line max-len
  /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g.test(a)
