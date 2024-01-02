import { createInterface } from 'node:readline/promises'

/**
 * Create a simple prompt for the terminal
 *
 * @example
 * const answer = await prompt('Do the thing')
 * if (answer.toLowercase() === 'y') { doTheThing() }
 */

export const prompt = async (question: string): Promise<string> => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const answer = await rl.question(question)
  return answer
}
