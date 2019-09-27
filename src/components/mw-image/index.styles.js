import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LayoutColumn = styled.div`
  width: 100%;
  
  @media(min-width: 768px){
    width: 50%;
  }
  
  @media(min-width: 1200px){
    width: 25%;
  }
`

export const ImageWrapper = styled.div`
  margin: 5px 0;
  
  @media(min-width: 768px){
    margin: 10px;
  }
  
  @media(min-width: 1200px){
    margin: 5px;
  }
`

export const AbsolutePositionedChild = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,.5);
`