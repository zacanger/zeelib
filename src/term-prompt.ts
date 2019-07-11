import { createInterface } from 'readline'

/**
 * Create a simple y/n prompt for the terminal
 *
 * Adapted from create-react-app's prompt
 * @example
 * prompt('Do the thing?') // with 'no' default
 * prompt('Do the thing?', true) // with 'yes' default
 */

const termPrompt = (
  question: string,
  isYesDefault: boolean = false
): Promise<boolean> =>
  new Promise((resolve: (boolean) => void): void => {
    const rlInterface = createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const hint = isYesDefault ? '[Y/n]' : '[y/N]'
    const message = `${question} ${hint}\n`

    rlInterface.question(message, (answer): void => {
      rlInterface.close()

      const useDefault = answer.trim().length === 0
      if (useDefault) {
        return resolve(isYesDefault)
      }

      const isYes = answer.match(/^(yes|y)$/i)
      return resolve(!!isYes)
    })
  })

export default termPrompt
