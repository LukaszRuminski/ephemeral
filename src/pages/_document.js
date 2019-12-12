import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        const url = ctx.req && ctx.req.url || ''

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                url,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang={process.env.LANG}>
                <Head>
                    <link rel='shortcut icon preload' as='image' href='/favicon.ico' type='image/x-icon' />
                    <link rel='icon preload' as='image' href='/favicon.ico' type='image/x-icon' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans' />
                    <link rel='canonical' href={process.env.DOMAIN_URL + this.props.url} />

                    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=5.0, shrink-to-fit=no' />

                    {this.props.styleTags}

                    <script async defer dangerouslySetInnerHTML={{
                        __html: `var PGdataLayer = { 'GTM': {
                        'SiteEnvironment': '${process.env.SITE_ENV}',
                        'SiteHost': '${process.env.SITE_HOST}',
                        'SiteTechnicalAgency': '${process.env.SITE_TA}',
                        'SiteLocalContainer': '${process.env.SITE_LC}',
                        'GoogleAnalyticsLocal': '${process.env.GA_ID}',
                        'GoogleAnalyticsStaging': '${process.env.GA_ID_STAGING}',
                        'AdChoices': '${process.env.ADCHOICE}',
                        'AdChoicesID': '${process.env.ADCHOICE_ID}',
                        'EvidonOverlay':'${process.env.EVIDON_OVERLAY}',
                        'EvidonOverlayID': '${process.env.EVIDON_OVERLAY_ID}',
                        'GoogleAnalyticsDisabled': '${process.env.GA_DISABLED}'},
                        };`
                    }}>
                    </script>
                    <script async defer dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${process.env.GTM_ID}');`
                    }}>
                    </script>
                </Head>
                <body className='custom_class' style={{ padding: 0, margin: 0, backgroundColor: '#252423', color: 'white' }}>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}'
                                height='0' width='0' style='display:none;visibility:hidden'></iframe>`
                    }}>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
