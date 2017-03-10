// @flow

import { createInterface } from 'readline'

// adapted from create-react-app's prompt
// prompt('Do the thing?') // with 'no' default
// prompt('Do the thing?', true) // with 'yes' default
const termPrompt = (question: string, isYesDefault: ?bool) =>
  new Promise((resolve): ?bool => {
    const rlInterface = createInterface({
      input  : process.stdin
    , output : process.stdout
    })

    const hint = isYesDefault ? '[Y/n]' : '[y/N]'
    const message = `${question} ${hint}\n`

    rlInterface.question(message, (answer) => {
      rlInterface.close()

      const useDefault = answer.trim().length === 0
      if (useDefault) return resolve(isYesDefault)

      const isYes = answer.match(/^(yes|y)$/i)
      return resolve(isYes)
    })
  })

export default termPrompt
