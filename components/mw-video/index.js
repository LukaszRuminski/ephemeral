import React from 'react'
import PropTypes from 'prop-types'
import Video from '@mw/video'

import { Layout } from './index.styles'

const SimpleExampleVideo = ({ videoId }) => {
    return (
        <>
            <h2>Simple example - video streaming</h2>
            <Layout>
                <Video videoId={videoId}/>
            </Layout>
        </>
    )
}

SimpleExampleVideo.defaultProps = {
    videoId: 'ace-youtil/ro-RO/zfrqmsgzzsmsl4ussez8'
}

SimpleExampleVideo.propTypes = {
    videoId: PropTypes.string.isRequired
}

export default SimpleExampleVideo
