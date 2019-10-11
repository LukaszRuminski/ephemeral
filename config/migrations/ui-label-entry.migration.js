require('dotenv').config()
var contentful = require('contentful-management')
var client = contentful.createClient({
    accessToken: process.env.CF_PERSONAL_ACCESS_TOKEN
})

const main = (async () => {
    const space = await client.getSpace(process.env.CF_SPACE_ID)
    const env = await space.getEnvironment('master')

    let globalLabels = await env.createEntry('labelGroup', {
        fields: {
            name: {
                'en-US': 'Global'
            },
            id: {
                'en-US': 'global'
            },
            labels: {
                'en-US': {
                    "title": "MW seed",
                    "welcomeText": "<h1>Hello Modern Web!</h1><p>This is a Modern Web seed project. You can fork it to start your new project.</p>"
                }
            }
        }
    })

    globalLabels = await globalLabels.publish()

    let allLabels = await env.createEntry('allLabels', {
        fields: {
            name: {
                'en-US': 'All labels'
            },
            labelGroups: {
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

    console.info('Done!')
})
main()