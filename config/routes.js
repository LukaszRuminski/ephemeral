require('dotenv').config()
const Router = require('./router.config')

module.exports = async () => {
    // const contentful = require('contentful')

    // const client = contentful.createClient({
    //     space: process.env.CF_SPACE_ID,
    //     accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
    //     environment: process.env.CF_ENVIRONMENT || 'master'
    // })

    // const blogPosts = await client.getEntries({
    //     'content_type': 'blogPost'
    // })

    // let articlePages = {}
    // blogPosts.items.forEach(post => {
    //     articlePages[`${Router.article.slug}/${post.sys.id}`] = { page: `/article` }
    // })

    return {
        '/': { page: '/' },
        [Router.blog.slug]: { page: '/blog' },
        [Router.login.slug]: { page: '/login' },
        [Router.register.slug]: { page: '/register' },
        [Router.verify.slug]: { page: '/verify' },
        [Router.restricted.slug]: { page: '/restricted' },
        [Router.team.slug]: { page: '/team' },
        [Router.portfolio.slug]: { page: '/portfolio' }
        // ...articlePages
    }
}
