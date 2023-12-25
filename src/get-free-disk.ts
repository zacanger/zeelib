import { execSync } from 'node:child_process'

/**
 * Get free disk space
 * @example
 * getFreeDisk()
 */

const getFreeDisk = (): number => {
  const lines = execSync('df -k /').toString().trim().split('\n')
  const strDiskInfo = lines[lines.length - 1].replace(/\s+/g, ' ')
  const diskInfo = strDiskInfo.split(' ')
  const total = +diskInfo[1] * 1024
  const free = +diskInfo[3] * 1024
  const freeDisk = free / total / Math.pow(10, -2)
  return freeDisk
}

export default getFreeDisk
