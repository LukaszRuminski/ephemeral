require('dotenv').config()
require('path')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const { generateRobots } = require('./config/generators')

const nextConfig =
    withCSS(
        withImages({
            exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
                await generateRobots(dev)

                if (!dev) {
                    await copyFile(join(__dirname, 'config', 'robots.txt'), join(outDir, 'robots.txt'))
                }

                return defaultPathMap
            },
            exportTrailingSlash: true,
            distDir: process.env.DIST_DIRECTORY,
            env: {
                CF_SPACE_ID: process.env.CF_SPACE_ID,
                CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
                CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
                DOMAIN_URL: process.env.DOMAIN_URL,
                PROVIDER: process.env.PROVIDER,
                CLIENT_ID: process.env.CLIENT_ID,

            },
            webpack(config) {
                config.resolve.alias['Component'] = join(__dirname, 'src', 'components')
                config.resolve.alias['Config'] = join(__dirname, 'config')
                return config
            }
        })
    )

module.exports = nextConfig
