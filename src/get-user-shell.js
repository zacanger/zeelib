// @flow

/**
 * Get the current user's shell, or
 * an empty string on shell-less platforms
 */

const getUserShell = (): string =>
  process.env.SHELL || ''

export default getUserShell
