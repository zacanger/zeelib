/**
 * Returns true if the provided string is a valid semantic version
 * @example
 * isSemver("0.0.0") // => true
 * isSemver("0.") // => false
 */

export const isSemver = (v: string): boolean =>
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(v)
