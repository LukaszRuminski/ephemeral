import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioItemWrapper, Link, Content, Title, Image } from './PortfolioItem.styles'

const PortfolioItem = ({ url, newimage, title, description }) => (
    <PortfolioItemWrapper>
        <Link href={url}>
            <Image src={newimage && newimage.file.url} alt={newimage && newimage.altText} />
        </Link>
        <Content>
            <Title>{title}</Title>
            {description}
            <Link href={url}>{url}</Link>
        </Content>
    </PortfolioItemWrapper>
)

PortfolioItem.propTypes = {
    newimage: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
}

PortfolioItem.defaultProps = {
    title: 'Portfolio Item Title',
    description: '',
    url: ''
}

export default PortfolioItem
