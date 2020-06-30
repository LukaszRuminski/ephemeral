import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import H1 from '../H1/H1'
import { AuthContext } from '../../auth/authContext'
import {
    Container,
    ContainerH1,
    ContainerH2,
    ContainerParagraph,
    LoginButton,
    UnauthorizedWrapper
} from './Unauthorized.styles'

class Unauthorized extends Component {

    static contextType = AuthContext

    render() {
        const { startAuthentication } = this.context

        return (
            <Layout pageTitle={'ACE: Unauthorized'} secondary>
                <UnauthorizedWrapper><H1 title='Unauthorized Page'/>
                    <Container>
                        <ContainerH1> 401 </ContainerH1>
                        <ContainerH2>Oops! Your not authorized to view this page</ContainerH2>
                        <ContainerParagraph>Please login to view this page <LoginButton onClick={startAuthentication.bind(this.context)}>Login</LoginButton></ContainerParagraph>
                    </Container>

                </UnauthorizedWrapper>
            </Layout>
        )

    }
}

export default Unauthorized
