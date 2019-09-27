import React from 'react'
import PropTypes from 'prop-types'
import Image from '@mw/image'
import { AbsolutePositionedChild, ImageWrapper, Layout, LayoutColumn } from './index.styles'

const MWImageExample = ({ images }) => {
    return (
        <>
            <h2>Images</h2>
            <Layout>
                {
                    images.map((id) => (
                        <LayoutColumn key={id}>
                            <ImageWrapper>
                                <Image imageId={id} cloudName='procter-gamble'/>
                            </ImageWrapper>
                        </LayoutColumn>
                    ))
                }
            </Layout>
            <h2>Background images</h2>
            <Layout>
                {
                    images.map((id) => (
                        <LayoutColumn key={id}>
                            <ImageWrapper>
                                <Image imageId={id} cloudName='procter-gamble' widthToHeightRatio={1.5}>
                                    {
                                        (props, state) => (
                                            <AbsolutePositionedChild>
                                                <p>Width: {state.width}</p>
                                            </AbsolutePositionedChild>
                                        )
                                    }
                                </Image>
                            </ImageWrapper>
                        </LayoutColumn>
                    ))
                }
            </Layout>
        </>
    )
}

MWImageExample.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MWImageExample