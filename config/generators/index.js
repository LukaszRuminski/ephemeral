const generateSitemap = require('./sitemap.generator')
const generateRobots = require('./robots.generator')
const generateWebConfig = require('./web.config.generator')

module.exports.generateRobots = generateRobots
module.exports.generateSitemap = generateSitemap
module.exports.generateWebConfig = generateWebConfig
