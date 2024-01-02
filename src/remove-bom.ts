/**
 * The same as what's in Node's `module` (see `lib/internal/module`).
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 * because the buffer-to-string conversion in `fs.readFileSync()`
 * translates it to FEFF, the UTF-16 BOM.
 * @example
 * removeBOM(someContent)
 */

export const removeBOM = (content: string): string =>
  content.charCodeAt(0) === 0xfe_ff ? content.slice(1) : content
