import React from 'react'
import PropTypes from 'prop-types'
import H1 from 'Component/H1/H1'
import Layout from 'Component/Layout/Layout'
import { getBlogPosts } from '../adapters/contentful/contentful.adapters'
import r from 'Config/router.config'
import styled from 'styled-components'
import BlogPostCard from 'Component/BlogPostCard/BlogPostCard'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  background-color: #2d2c2c;
  min-height: 100vh;
`

class Blog extends React.Component {
    static async getInitialProps() {
        const blogPosts = await getBlogPosts()
        return { blogPosts: blogPosts.data.blogPostCollection.items }
    }

    render() {
        const { blogPosts } = this.props
        blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

        return (
            <Background>
                <Layout pageTitle='Ace: Blog' secondary>
                    <BodyWrapper>
                        <H1 title={r.blog.linkName}/>
                        {
                            blogPosts
                                .map(blogPost => (
                                    <BlogPostCard key={blogPost.title} {...blogPost}/>
                                ))}
                    </BodyWrapper>
                </Layout>
            </Background>
        )
    }
}

Blog.propTypes = {
    blogPosts: PropTypes.arrayOf(PropTypes.object)
}

export default Blog
