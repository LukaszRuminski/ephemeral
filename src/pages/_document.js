import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang={process.env.LANG}>
                <Head>
                    <link rel='shortcut icon' href='/static/images/favicon.ico' type='image/x-icon'/>
                    <link rel='icon' href='/static/images/favicon.ico' type='image/x-icon'/>

                    <script dangerouslySetInnerHTML={{
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
                    <script dangerouslySetInnerHTML={{
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
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}