require('dotenv').config()
var contentful = require('contentful-management')
var client = contentful.createClient({
    accessToken: process.env.CF_PERSONAL_ACCESS_TOKEN
})

const main = (async () => {
    const space = await client.getSpace(process.env.CF_SPACE_ID)
    const env = await space.getEnvironment('master')

    let globalLabels = await env.createEntry('labels', {
        fields: {
            name: {
                'en-US': 'Global'
            },
            id: {
                'en-US': 'global'
            },
            labels: {
                'en-US': { "title": "MW seed" }
            }
        }
    })

    globalLabels = await globalLabels.publish()

    let allLabels = await env.createEntry('allLabels', {
        fields: {
            name: {
                'en-US': 'All labels'
            },
            labelsCollections: {
                'en-US': [{
                    sys: {
                        type: 'Link',
                        linkType: 'Entry',
                        id: globalLabels.sys.id
                    }
                }]
            }
        }
    })

    await allLabels.publish()
})
main()