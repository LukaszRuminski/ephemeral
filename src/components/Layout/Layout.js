import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from '../Header/Header'
import { AceLayout } from './Layout.styles'

const Layout = (props) => (
    <>
        <Head>
            <title>{props.pageTitle || 'Ace team'}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header secondary={props.secondary} withoutLogo={props.withoutLogo} />

        <AceLayout>
            {props.children}
        </AceLayout>

    </>
)

Layout.propTypes = {
    pageTitle: PropTypes.string,
    secondary: PropTypes.bool,
    withoutLogo: PropTypes.bool,
    children: PropTypes.node
}

export default Layout
