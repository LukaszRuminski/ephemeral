import styled from 'styled-components'

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 20px;
`

export const MemberInfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MemberProfilePic = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background: ${props => props.src ? `url(${props.src})` : '#E61E32'}  no-repeat center;
  overflow: hidden;
  background-size: cover;
  margin-right: 20px;
`

export const DescriptionWrapper = styled.div`
  position: relative;
  background-color: #E61E32;
  height: 170px;
  bottom: -17px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const Description = styled.div`
  padding: 10px 20px 20px 20px;
  font-size: 14px;
  font-weight: 100;
  color: white;

  & h4{
    text-align: center;
  }
`

export const Card = styled.div`
  border-radius: 30px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.5);
  width: 234px;
  height: 337px;
  margin: 20px;
  font-weight: bold;
  font-family: "IBM Plex Sans SemiBold", sans-serif;
`
