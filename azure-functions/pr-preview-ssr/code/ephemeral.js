const {nextStart} = require('next/dist/cli/next-start')
const port = process.env.PORT || 3000

const server = nextStart(['./pr-preview-ssr/code', '-p', port])

module.exports = { server, hostname: 'localhost', port}
