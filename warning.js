#!/usr/bin/env node
/* eslint-disable */

var message = 'zeelib:\n' +
  'IMPORTANT: all functional-style utils will be removed in an upcoming release.\n' +
  'I strongly recommend migrating to Ramda.\n' +
  'zeelib will continue on as a library of Node and DOM utils.'

console.log(
  '\n' +
  '\x1b[31m' + message + '\x1b[39m' +
  '\n'
)
