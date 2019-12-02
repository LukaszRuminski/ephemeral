import styled from 'styled-components'

export const BlogPost = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 80%;
  display: flex;
  margin: 20px;

  @media(max-width: 800px){
    width: 100%;
    flex-direction: column;
  }
`
export const Image = styled.div`
  border-radius: 15px 0 0 15px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.imageUrl});
  width: 30%;

  @media(max-width: 800px){
    width: 100%;
    height: 150px;
    border-radius: 15px 15px 0 0;
  }
`
export const Content = styled.div`
  width: 70%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 22px;
  color: #333;

  @media(max-width: 800px){
    width: 80%;
  }
`
export const Title = styled.a`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
`

export const Body = styled.span`
  margin: 20px 0;
  text-align: justify;
`

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const PostDate = styled.span`
  font-weight: 700;
`

export const ReadMore = styled.a`
  font-weight: 700;
  cursor: pointer;
  font-size: 20px;
  color: #E61E32;
  text-decoration: none;
`
