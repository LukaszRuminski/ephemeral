import React, { Component } from 'react'
import H1 from 'Component/H1/H1'
import Layout from 'Component/Layout/Layout'
import PortfolioItem from 'Component/PortfolioItem/PortfolioItem'
import { getPortfolioItems } from '../adapters/contentful/contentful.adapters'
import styled from "styled-components"
import r from 'Config/router.config'
import PropTypes from 'prop-types'

const PortfolioWrapper = styled.div`
  text-align: center;
`

const PortfolioItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Portfolio extends Component {

    static async getInitialProps() {
        const portfolioItems = await getPortfolioItems()
        return { portfolioItems: portfolioItems.data.portfolioItemCollection.items }
    }

    render() {

        const { portfolioItems } = this.props

        return (
            <Layout pageTitle={'ACE: Portfolio'} secondary>
                <PortfolioWrapper>
                    <H1 title={r.portfolio.linkName} color={'#E61E32'}/>

                    <PortfolioItemsWrapper>
                        {portfolioItems.map(item => (
                            <PortfolioItem key={item.sys.id} {...item} />
                        ))}
                    </PortfolioItemsWrapper>
                </PortfolioWrapper>
            </Layout>
        )
    }
}

Portfolio.propTypes = {
    portfolioItems: PropTypes.arrayOf(PropTypes.object)
}

export default Portfolio
