import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { getGlobalLabels } from '../adapters/contentful/contentful.adapters'

import { AuthProvider } from '../auth/authContext'

export default class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        const labels = await getGlobalLabels()

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {
            pageProps,
            labels: labels.data.labelGroupCollection.items[0].labels
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            isOidcReady: false
        }
    }

    componentDidMount = () => {
        this.setState({ isOidcReady: true })
    }

    render() {
        const { Component, pageProps, labels } = this.props
        const { isOidcReady } = this.state

        return (
            isOidcReady && <>
                <Head>
                    <title>{labels.title}</title>
                </Head>
                <AuthProvider>
                    <Component {...pageProps} globalLabels={labels} />
                </AuthProvider>
            </>
        )
    }
}
