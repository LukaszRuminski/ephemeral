require('dotenv').config()
const Router = require('./router.config')
const getBlogPosts =  require('../src/adapters/contentful/contentful.adapters').getBlogPosts

module.exports = async () => {
    const blogPosts = await getBlogPosts()

    let articlePages = {}
    blogPosts.data.blogPostCollection.items.forEach(post => {
        articlePages[`${Router.article.slug}/${post.sys.id}`] = { page: `/article` }
    })

    return {
        '/': { page: '/' },
        [Router.blog.slug]: { page: '/blog' },
        [Router.team.slug]: { page: '/team' },
        [Router.portfolio.slug]: { page: '/portfolio' },
        [Router.signin.slug]: { page: '/signin' },
        ...articlePages
    }
}
