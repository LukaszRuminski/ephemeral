import styled from 'styled-components'

export const AceHeader = styled.div`
  background-color: transparent;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100px;
  font-family: "IBM Plex Sans SemiBold", sans-serif;
  z-index: 5;
`

export const AceBrandName = styled.span`
  position: absolute;
  top: 37px;
  left: 172.5px;
  color: ${props => props.secondary ? '#fff' : '#E61E32'};
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;

  @media (max-width: 800px) {
    display: none;
  }
`

export const AceBrandWrapper = styled.a`
  text-decoration: none;
  display: ${props => props.withoutLogo ? 'none' : 'initial'};
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 550px;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 150px;
    width: 150px;
  }
`

export const AceCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${props => props.secondary ? '#e72335bd' : '#E61E32'};
  border-radius: 50%;
  position: relative;
  left: -150px;
  top: -150px;
  z-index: 5;
`

export const AceLogo = styled.img`
  position: absolute;
  z-index: 10;
  width: 122.58px;
`

export const AceMenu = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin-top: 39px;
  margin-right: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`

export const AceMenuLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-right: 45px;
  color: ${props => props.active ? '#E61E32' : props.secondary ? '#fff' : '#000'};
  font-size: 25px;
  font-weight: bold;
  line-height: 39px;

  &:hover{
    border-bottom: 3px solid #E61E32;
    margin-bottom: -3px;
  }
`

export const AceLoginLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 4px 0 4px;
  color: ${props => props.active ? '#E61E32' : props.secondary ? '#fff' : '#000'};
  background: ${props => props.active ? '#E61E32' : props.secondary ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.7)'};
  font-size: 25px;
  font-weight: bold;
  line-height: 39px;
  bottom: 10%;
  position: absolute;

  &:hover{
    border-bottom: 3px solid #E61E32;
    margin-bottom: -3px;
  }

  @media (min-width: 800px) {
    position: relative;
    margin-right: 45px;
  }
`

export const AceMenuMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: initial;
  }
`

export const AceIcon = styled.img`
  width: 50px;
  float: right;
  margin: 20px;

  &:hover{
    cursor: pointer;
  }
`

export const AceIconMenu = styled(AceIcon)`
  filter: ${props => props.secondary ? 'invert(62%) sepia(46%) saturate(361%) hue-rotate(307deg) brightness(102%)' +
    ' contrast(80%)' : ' invert(13%) sepia(97%) saturate(4678%) hue-rotate(349deg) brightness(105%) contrast(82%)'};
  display: ${props => props.menuOpen ? 'none' : 'initial'};
`

export const AceIconClose = styled(AceIcon)`
  filter: invert(100%);
  position: absolute;
  top: 0;
  right: 0;
`

export const AceHiddenMenu = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 200px;
  right: 0;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.5);
  background-color: ${props => props.secondary ? '#E6969C' : 'rgba(231,35,53, 1)'};
  flex-direction: column;
`

export const AceMenuLinkMobile = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  color: #FFF;
`
