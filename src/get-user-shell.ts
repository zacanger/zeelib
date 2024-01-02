/**
 * Get the current user's shell, or
 * an empty string on shell-less platforms
 * @example
 * getUserShell()
 */

export const getUserShell = (): string =>
  (process?.env.SHELL) ?? ''
