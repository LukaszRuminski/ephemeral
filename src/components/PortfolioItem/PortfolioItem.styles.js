import styled from 'styled-components'

export const PortfolioItemWrapper = styled.div`
  display: flex;
  background-color: #E61E32;
  flex-direction: column;
  border-radius: 15px;
  width: 80%;
  margin: 15px;

  @media(max-width: 800px){
    width: 100%;
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  line-height: 30px;
  color: white;

  @media(max-width: 800px){
    padding: 10px 25px;
  }
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export const Link = styled.a`
  color: white;
  font-style: italic;

  :hover{
    & > img {
      filter: sepia(50%) contrast(50%) saturate(100%) hue-rotate(100deg);
    }
  }
`
