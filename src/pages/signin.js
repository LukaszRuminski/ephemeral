import React, { Component } from 'react'
import Layout from 'Component/Layout/Layout'
import H1 from 'Component/H1/H1'
import styled from 'styled-components'

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class SignIn extends Component {

    render() {

        return (
            <Layout pageTitle={'ACE: SignIn'} secondary>
                <SignInWrapper><H1 title={'SignIn Page'}/></SignInWrapper>
            </Layout>
        )

    }
}

export default SignIn
