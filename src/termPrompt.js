import { createInterface } from 'readline'

// adapted from create-react-app's prompt
// prompt('Do the thing?') // with 'no' default
// prompt('Do the thing?', 1) // with 'yes' default
const termPrompt = (question, isYesDefault) =>
  new Promise((resolve) => {
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
