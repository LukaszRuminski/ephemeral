require('dotenv').config()
var contentful = require('contentful-management')
var client = contentful.createClient({
    accessToken: process.env.CF_PERSONAL_ACCESS_TOKEN
})

const labelGroupCT = {
    name: 'Label group',
    description: 'Storing group of labels for a particular page or the whole website. The name should indicate for which page those labels are meant to. If labels are reused between multiple pages, name it "Global"',
    fields: [
        {
            id: 'id',
            name: 'ID',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [{ "unique": true }],
            disabled: false,
            omitted: false
        },
        {
            id: 'name',
            name: 'Name',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [{ "unique": true }],
            disabled: false,
            omitted: false
        },
        {
            id: 'labels',
            name: 'Labels',
            type: 'Object',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false
        }
    ]
}

const allLabelsCT = {
    name: '_All labels',
    description: 'This content type should include all entries of Labels type. This way content editors can easily access all labels from a single place.',
    fields: [
        {
            id: 'name',
            name: 'Name',
            type: 'Symbol',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false
        },
        {
            id: 'labelGroups',
            name: 'Label groups',
            type: 'Array',
            localized: false,
            required: true,
            validations: [],
            disabled: false,
            omitted: false,
            items: {
                type: "Link",
                validations: [{ linkContentType: ["labelGroup"] }],
                linkType: "Entry"
            }
        }
    ]
}

const labelGroupEntry = {
    fields: {
        id: {
            'en-US': 'global'
        },
        name: {
            'en-US': 'Global labels'
        },
        labels: {
            'en-US': {
                "title": "MW seed",
                "welcomeText": "<h1>Hello Modern Web!</h1><p>This is a Modern Web seed project. You can fork it to start your new project.</p>"
            }
        }
    }
}

const getAllLabelsEntry = (id) => ({
    fields: {
        name: {
            'en-US': 'All labels'
        },
        labelGroups: {
            'en-US': [{
                sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: id
                }
            }]
        }
    }
})

const createContentType = (async (env, id, config) => {
    let contentType = await env.createContentTypeWithId(id, config)
    contentType = await contentType.update()
    contentType.displayField = 'name'
    contentType = await contentType.update()
    await contentType.publish()
})

const contentTypes = (async (env) => {
    await createContentType(env, 'labelGroup', labelGroupCT)
    await createContentType(env, 'allLabels', allLabelsCT)
})

const main = (async () => {
    const space = await client.getSpace(process.env.CF_SPACE_ID)
    const env = await space.getEnvironment('master')

    await contentTypes(env)

    let globalLabels = await env.createEntry('labelGroup', labelGroupEntry)

    globalLabels = await globalLabels.publish()

    let allLabels = await env.createEntry('allLabels', getAllLabelsEntry(globalLabels.sys.id))

    await allLabels.publish()

    console.info('Labels architecture migrated!')
})
main()