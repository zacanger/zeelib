/**
 * Get the current user's shell, or
 * an empty string on shell-less platforms
 * @example
 * getUserShell()
 */

const getUserShell = (): string => process.env.SHELL || ''

export default getUserShell
