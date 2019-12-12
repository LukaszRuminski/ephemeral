import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import H1 from 'Component/H1/H1'
import Layout from 'Component/Layout/Layout'
import { getBlogPost } from '../adapters/contentful/contentful.adapters'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { formatDate } from '../helpers/blog.helpers'

const Article = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  width: 80%;
  max-width: 1080px;
  margin: 15px;

  @media(max-width: 800px){
    width: 100%;
    margin-bottom: 0;
  }
`
const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-image: url(${props => props.imageUrl});
  height: 300px;

  @media(max-width: 800px){
    height: 150px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  line-height: 22px;
  color: #333;

  @media(max-width: 800px){
    padding: 10px 25px;
  }
`
const Body = styled.span`
  margin: 20px 0;
  text-align: justify;

  img {
    max-width: 100%;
  }
`
const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const PostDate = styled.span`
  font-weight: 700;
`
const Author = styled.span`
  font-weight: 700;
`

const Background = styled.div`
  background-color: #2d2c2c;
  min-height: 100vh;
`

class ArticlePage extends React.Component {
    static async getInitialProps(data) {
        const postId = data.asPath.split('/')[2]
        const article = await getBlogPost(postId)
        return { ...article.data.blogPost }
    }

    render() {
        const { title, body, date, author, image } = this.props
        return (
            <Background className={'event_view_article_page'}>
                <Layout pageTitle={title} secondary={true}>
                    <ArticleWrapper>
                        <Article>
                            <Image imageUrl={image.url || image.file.url} alt={image.altText} />
                            <Content>
                                <H1 color='#000' title={title} />

                                <Body>
                                    <Markdown source={body} escapeHtml={false} />
                                </Body>
                                <Details>
                                    <PostDate>{formatDate(date)}</PostDate>
                                    <Author>{author}</Author>
                                </Details>
                            </Content>
                        </Article>
                    </ArticleWrapper>
                </Layout>
            </Background>
        )
    }
}

ArticlePage.propTypes = {
    title: PropTypes.string,
    image: PropTypes.object,
    body: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string
}

export default withRouter(ArticlePage)
