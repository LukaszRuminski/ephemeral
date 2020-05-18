const path = require('path')
require('dotenv').config()
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const getRoutes = require('./config/routes')

const nextConfig =
    withCSS(
        withImages({
            exportPathMap: getRoutes,
            exportTrailingSlash: true,
            distDir: '../.next',
            env: {
                CF_SPACE_ID: process.env.CF_SPACE_ID,
                CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
                CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
                DOMAIN_URL: process.env.DOMAIN_URL,
                PROVIDER: process.env.PROVIDER,
                CLIENT_ID: process.env.CLIENT_ID,

            },
            webpack(config) {
                config.resolve.alias['Component'] = path.join(__dirname, 'src', 'components')
                config.resolve.alias['Config'] = path.join(__dirname, 'config')
                return config
            }
        })
    )

module.exports = nextConfig
