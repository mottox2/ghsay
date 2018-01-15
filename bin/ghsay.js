const say = require('../lib/index.js').default
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const commands = argv._

if (commands.length === 0) {
  console.log('Usage: ghsay message [--verbose]')
  process.exit(1)
}

const message = commands[0]

say(message)
