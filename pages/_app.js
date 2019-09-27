import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { getGlobalLabels } from '../adapters/contentful/contentful.adapters'

export default class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        const labels = await getGlobalLabels()

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {
            pageProps,
            labels: labels.data.labelsCollection.items[0].labels
        }
    }

    render() {
        const { Component, pageProps, labels } = this.props

        return (
            <>
                <Head>
                    <title>{labels.title}</title>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}