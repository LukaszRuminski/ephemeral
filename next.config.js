require('dotenv').config()
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const getRoutes = require('./config/routes')

const nextConfig =
    withCSS(
        withImages(
            {
                exportPathMap: getRoutes,
                exportTrailingSlash: true,
                distDir: '../.next',
                env: {
                    CF_SPACE_ID: process.env.CF_SPACE_ID,
                    CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
                    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN
                }
            }
        )
    )

module.exports = nextConfig
