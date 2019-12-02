import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PortfolioItemWrapper, Link, Content, Title, Image } from './PortfolioItem.styles'

class PortfolioItem extends Component {

    render() {
        const { item } = this.props

        return (
            <PortfolioItemWrapper>
                <Link href={item.url}>
                    <Image src={item.newimage && item.newimage.fields.file.fields.file.url} alt={item.newimage && item.newimage.fields.altText}/>
                </Link>
                <Content>
                    <Title>{item.title}</Title>
                    {item.description}
                    <Link href={item.url}>{item.url}</Link>
                </Content>
            </PortfolioItemWrapper>
        )
    }
}

PortfolioItem.propTypes = {
    item: PropTypes.object
}

PortfolioItem.defaultProps = {
    item: {
        image: '',
        title: 'Portfolio Item Title',
        description: 'Portfolio Item Description',
        url: ''
    },
}

export default PortfolioItem
