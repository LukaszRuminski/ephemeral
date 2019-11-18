require('dotenv').config()
const { OUT_PATH } = process.env
const fs = require('fs')

fs.copyFileSync('config/robots/robots-prod.txt', `${OUT_PATH}/robots.txt`)
