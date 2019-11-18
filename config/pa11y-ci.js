require('dotenv').config()
const { spawn } = require('child_process')
const { PORT, DOMAIN_URL } = process.env

spawn(`pa11y-ci --sitemap ${'http://localhost:'+PORT+'/sitemap.xml'} --sitemap-find ${DOMAIN_URL} --sitemap-replace ${'http://localhost:'+PORT} --json > pa11y-report.json`, { shell: true })
