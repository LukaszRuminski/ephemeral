import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import { formatDate, trimPostLength } from '../../helpers/blog.helpers'
import { BlogPost, Body, Content, Details, Image, PostDate, ReadMore, Title } from './BlogPostCard.styles'

const BlogPostCard = ({ sys, headlights, title, body, image, date }) => (
    <BlogPost>
        <Image
            imageUrl={image &&
                image.url ||
                image.file &&
                image.file.url ||
                'https://via.placeholder.com/600x400'}
            alt={image && image.altText}
        />
        <Content>
            <Title href={`/article/${sys.id}`}>
                {title}
            </Title>
            <Body>
                <Markdown source={headlights || trimPostLength(body)}
                    escapeHtml={false}
                />
            </Body>
            <Details>
                <PostDate>{formatDate(date)}</PostDate>
                <ReadMore href={`/article/${sys.id}`}>
                    Read more
                </ReadMore>
            </Details>
        </Content>
    </BlogPost>
)

BlogPostCard.propTypes = {
    sys: PropTypes.shape({
        id: PropTypes.string.isRequired
    }),
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    headlights: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string.isRequired
}

export default BlogPostCard
