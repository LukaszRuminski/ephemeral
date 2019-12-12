import React from 'react'
import Layout from 'Component/Layout/Layout'
import styled from 'styled-components'

const AceLogoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  top: calc(50% - 250px);
  left: calc(50% - 250px);

  @media(max-width: 800px){
    top: calc(50% - 150px);
    left: calc(50% - 150px);
  }
`

const AceBrand = styled.p`
  color: #E61E32;
  font-size: 60px;
  font-weight: bold;
  font-family: "IBM Plex Sans SemiBold", sans-serif;
  text-align: center;
`

const AceLogo = styled.img`
  height: 500px;
  margin-top: -50px;

  @media(max-width: 800px){
    width: 300px;
    height: auto;
  }
`

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: grayscale(90%);
  background: ${props => props.src ? `url(${props.src})` : '#E72335'}  no-repeat center;
  overflow: hidden;
  background-size: cover;
`

class Page extends React.Component {
    render() {
        return (
            <Layout pageTitle={'ACE: Homepage'} withoutLogo secondary>
                <BackgroundImage src={'http://res.cloudinary.com/mwace/video/upload/v1568033858/Aceteam.tech/Pexels_Videos_1564582.jpg'}/>
                <AceLogoWrapper>
                    <AceLogo src='/static/images/logo.png' alt={'ACE Card as a team logo'}/>
                    <AceBrand>ACE TEAM</AceBrand>
                </AceLogoWrapper>
            </Layout>
        )
    }
}

export default Page
