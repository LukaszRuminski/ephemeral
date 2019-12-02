import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import { formatDate, trimPostLength } from '../../helpers/blog.helpers'
import { BlogPost, Body, Content, Details, Image, PostDate, ReadMore, Title } from './BlogPostCard.styles'

class BlogPostCard extends Component {
    render() {
        const { blogPost } = this.props
        return (
            <BlogPost>
                <Image
                    imageUrl={blogPost.fields.image &&
                    blogPost.fields.image.fields.url ||
                    blogPost.fields.image.fields.file &&
                    blogPost.fields.image.fields.file.fields.file.url ||
                    'https://via.placeholder.com/600x400'}
                    alt={blogPost.fields.image && blogPost.fields.image.fields.altText}
                />
                <Content>
                    <Title href={`/article/${blogPost.sys.id}`}>
                        {blogPost.fields.title}
                    </Title>
                    <Body>
                        <Markdown source={blogPost.fields.headlights || trimPostLength(blogPost.fields.body)}
                            escapeHtml={false}
                        />
                    </Body>
                    <Details>
                        <PostDate>{formatDate(blogPost.fields.date)}</PostDate>
                        <ReadMore href={`/article/${blogPost.sys.id}/${blogPost.sys.id}`}>
                            Read more
                        </ReadMore>
                    </Details>
                </Content>
            </BlogPost>
        )
    }
}

BlogPostCard.propTypes = {
    blogPost: PropTypes.shape({
        sys: PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            image: PropTypes.object,
            title: PropTypes.string,
            headlights: PropTypes.string,
            body: PropTypes.string,
            date: PropTypes.string
        })
    })
}

BlogPostCard.defaultProps = {
    imageUrl: '',
    firstName: 'First name',
    lastName: 'Last name',
    description: 'Default description'
}

export default BlogPostCard
