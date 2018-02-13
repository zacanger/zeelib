// @flow

/**
 * The same as what's in Node's `module` (see `lib/internal/module`).
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 * because the buffer-to-string conversion in `fs.readFileSync()`
 * translates it to FEFF, the UTF-16 BOM.
 * @example
 * removeBOM(someContent)
 */

const removeBOM = (content: string): string => {
  if (content.charCodeAt(0) === 0xFEFF) {
    return content.slice(1)
  } else {
    return content
  }
}

export default removeBOM
