require('dotenv').config()
const { DOMAIN_URL, OUT_PATH } = process.env
const fs = require('fs')
const formatDate = require('../src/helpers/dateFormat.helper')

const getPathsObject = () => {
    const fileObj = {}

    const walkSync = dir => {
        const files = fs.readdirSync(dir)
        files.forEach(file => {

            let filePath = `${dir}${file}`
            const fileStats = fs.statSync(filePath)

            if (fileStats.isDirectory()) {
                walkSync(`${filePath}/`)
            } else {
                if(file.endsWith('.html')) {

                    filePath = filePath.replace(`${OUT_PATH}/`, '')
                    filePath = filePath.replace('index.html', '')
                    fileObj[`/${filePath}`] = {
                        lastModified: fileStats.mtime
                    }
                }
            }
        })
    }

    walkSync(`${OUT_PATH}/`)

    return fileObj
}

const pathsObj = getPathsObject()

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Object.keys(pathsObj).map(
        path => `<url>
        <loc>${DOMAIN_URL}${path}</loc>
        <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
        </url>`
    )}
</urlset>`

fs.writeFileSync(`${OUT_PATH}/sitemap.xml`, sitemapXml)
