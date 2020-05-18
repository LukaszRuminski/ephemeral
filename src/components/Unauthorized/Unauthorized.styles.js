import styled from 'styled-components'

export const UnauthorizedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding: 15px;
`

export const ContainerH1 = styled.div`
  font-size: 186px;
  font-weight: 200;
  margin: 0;
  background: linear-gradient(130deg,#b52330,#fd746d);
  color: transparent;
  /* stylelint-disable-next-line */
  -webkit-background-clip: text;
  /* stylelint-disable-next-line */
  background-clip: text;
  text-transform: uppercase;
`

export const ContainerH2 = styled.div`
  font-size: 33px;
  font-weight: 200;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 25px;
  letter-spacing: 3px;
`

export const ContainerParagraph= styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginButton = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin-top: 5px;
  padding: 4px 8px 4px 8px;
  color: #000;
  background: rgba(255, 255, 255, 0.7);
  font-size: 25px;
  font-weight: bold;
  line-height: 40px;
  width: auto;

  &:hover{
    border-bottom: 3px solid #E61E32;
    margin-bottom: -3px;
  }
  @media (min-width: 800px) {
    padding: 0 4px;
  }
`
