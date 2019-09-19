import React from 'react'
import styled from 'styled-components'
import Image from '@mw/image'

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const LayoutColumn = styled.div`
  width: 100%;
  
  @media(min-width: 768px){
    width: 50%;
  }
  
  @media(min-width: 1200px){
    width: 25%;
  }
`

const ImageWrapper = styled.div`
  margin: 5px 0;
  
  @media(min-width: 768px){
    margin: 10px;
  }
  
  @media(min-width: 1200px){
    margin: 5px;
  }
`

const AbsolutePositionedChild = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,.5);
`

const Home = ({ images }) => {
    return (
        <>
            <h2>Images</h2>
            <Layout>
                {
                    images.map((id) => (
                        <LayoutColumn key={id}>
                            <ImageWrapper>
                                <Image imageId={id} cloudName='procter-gamble' />
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
                                <Image imageId={id}
                                       cloudName='procter-gamble'
                                       widthToHeightRatio={1.5}
                                >
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

Home.defaultProps = {
    images: [
        'ace-youtil/ro-RO/lqvtnxzl3epkpvr8drkv',
        'ace-youtil/ro-RO/plmiq10gf3jvtkrgokuk',
        'ace-youtil/ro-RO/vu0hjpq185arrww5oqhz',
        'ace-youtil/ro-RO/qymugjyrwtbnzz8dezju'
    ]
}

export default Home