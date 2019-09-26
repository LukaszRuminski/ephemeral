const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const nextConfig =
    withCSS(
        withImages(
            {
                exportTrailingSlash: true
            }
        )
    )

module.exports = nextConfig