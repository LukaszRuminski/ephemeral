require('dotenv').config()
const { DOMAIN_URL } = process.env
const fs = require('fs')
let { robots } = require('../../package.json')

const formattedString = (s) => {
    s = s.replace(/([A-Z])/g, '-$1').trim()
    s = s.replace(/^./, s[0].toUpperCase())
    return s
}

const createRobots = (dev) => {
    let robotsEnv = robots.prod
    if(dev){
        robotsEnv = robots.dev
    }
   
    let generatedRobots = Object.keys(robotsEnv).map(
        config => robotsEnv[config].map(
            configValue => `${formattedString(config)}: ${configValue}`
        )
    )
   
    const sitemap = `Sitemap: ${DOMAIN_URL}/sitemap.xml`
    generatedRobots.push(sitemap)
    generatedRobots = generatedRobots.toString().replace(/,/g, '\n')
    return generatedRobots
}

const generateRobots = (dev) => fs.writeFileSync(`config/robots.txt`, createRobots(dev))

module.exports = generateRobots