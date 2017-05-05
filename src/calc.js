// @flow

function calc (op: string) {
  return function (): number {
    return [].reduce.call(arguments, op)
  }
}

export default calc
