const {nextStart} = require('next/dist/cli/next-start')
const port = process.env.PORT || 3000
nextStart(['-p', port ])
