import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from 'Component/Layout/Layout'
import H1 from 'Component/H1/H1'
import TeamMembers from 'Component/TeamMembers/TeamMembers'
import { getTeamMembers } from "../adapters/contentful/contentful.adapters"
import styled from 'styled-components'
import r from 'Config/router.config'

const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Team extends Component {

    static async getInitialProps() {
        const teamMembers = await getTeamMembers()
        return { teamMembers: teamMembers.data.teamMemberCollection.items }
    }

    render() {
        const { teamMembers } = this.props

        return (
            <Layout pageTitle={'ACE: Team'}>
                <TeamsWrapper>
                    <H1 title={r.team.linkName} color={'#E61E32'}/>
                    <TeamMembers team={teamMembers}/>
                </TeamsWrapper>
            </Layout>
        )

    }
}

Team.propTypes = {
    teamMembers: PropTypes.array
}

export default Team
