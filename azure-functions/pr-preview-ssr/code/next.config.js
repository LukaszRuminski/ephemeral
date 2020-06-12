require('dotenv').config()
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const nextConfig =
    withCSS(
        withImages({
            exportTrailingSlash: true,
            env: {
                CF_SPACE_ID: process.env.CF_SPACE_ID,
                CF_ENVIRONMENT: process.env.CF_ENVIRONMENT,
                CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN
            }
        })
    )

module.exports = nextConfig
