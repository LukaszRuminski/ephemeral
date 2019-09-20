const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const nextConfig =
    withCSS(
        withImages(
        //    Your configuration object
        )
    )

module.exports = nextConfig