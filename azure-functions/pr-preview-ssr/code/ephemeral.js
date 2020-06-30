const cli = require('next/dist/cli/next-start')

const server = cli.nextStart(['-p', process.env.PORT || 3000])

module.exports = { appServer: server }
