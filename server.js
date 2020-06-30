const cli = require('next/dist/cli/next-start')

process.env.NODE_ENV = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'production'
process.env.NODE_ENV === 'production' ? process.env.DIST_DIRECTORY = '.next' : ''
cli.nextStart(['-p', process.env.PORT || 3000])
