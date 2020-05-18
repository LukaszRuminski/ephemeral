import React, { Component } from 'react'
import Layout from 'Component/Layout/Layout'
import H1 from 'Component/H1/H1'
import styled from 'styled-components'
import { AuthContext } from "../auth/authContext"
import Unauthorized from 'Component/Unauthorized/Unauthorized'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-top: 5px;
  padding: 4px 8px 4px 8px;
  color: #ffffff;
  font-size: 21px;
  line-height: 25px;
  width: auto;
  border-bottom: 3px solid #ffffff;

  &:hover{
    border-bottom: 3px solid #E61E32;
    margin-bottom: -3px;
  }
  @media (min-width: 800px) {
    padding: 0 4px;
  }
`

class Profile extends Component {

    static contextType = AuthContext

    state = {
        isProfileAvailable: false
    }

    async componentDidMount () {
        const { isAuthenticated, getUser } = this.context
        if (isAuthenticated()) {
            const user = await getUser()
            this.setState({ profile: user.profile, isProfileAvailable: true })
        }
    }

    renderUserInfo = () => {
        const { profile } = this.state
        return (
            <>
                <div>
                    <p>{'Email: ' + profile.email + ' '} {profile.email_verified ? 'verified' : 'not verified'}</p>
                    <p>{'First name: ' + profile.given_name}</p>
                    <p>{'Last name: ' + profile.family_name}</p>
                    <p>{'country: ' + profile.address.country}</p>
                </div>
                <Link href={process.env.PROVIDER + '/auth-ui/profile?client_id=' + process.env.CLIENT_ID}>Edit Profile</Link>
            </>
        )
    }

    render() {
        const { isAuthenticated } = this.context
        const { isProfileAvailable } = this.state

        return (
            <>
                {isAuthenticated() ? isProfileAvailable &&
                <Layout pageTitle={'ACE: Profile'} secondary>
                    <ProfileWrapper><H1 title={'Profile Page'}/>{this.renderUserInfo()}</ProfileWrapper>
                </Layout> : <Unauthorized/>
                }
            </>

        )

    }
}

export default Profile
