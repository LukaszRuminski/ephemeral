import React, { Component } from 'react'
import Layout from 'Component/Layout/Layout'
import H1 from 'Component/H1/H1'
import styled from 'styled-components'
import { AuthContext } from '../auth/authContext'

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class SignIn extends Component {

    static contextType = AuthContext

    componentDidMount() {
        const { completeAuthentication } = this.context
        completeAuthentication()
    }

    render() {
        return (
            <Layout pageTitle={'ACE: SignIn'} secondary>
                <SignInWrapper><H1 title={'SignIn Page'}/>
                    <p>You&apos;ve been Successfully logged in. In few seconds you will be redirected to page before logged in process</p>
                </SignInWrapper>
            </Layout>
        )

    }
}

export default SignIn
