import React, { Component } from 'react'
import TeamMembersCard from "./TeamMembersCard/TeamMembersCard"
import PropTypes from 'prop-types'
import { TeamMembersWrapper } from './TeamMembers.styles'

class TeamMembers extends Component{

    render(){
        const { team } = this.props

        team.sort((a,b)=>{
            if(a.fields.lastName.toLowerCase() < b.fields.lastName.toLowerCase()) return -1
            if(a.fields.lastName.toLowerCase() > b.fields.lastName.toLowerCase()) return 1
            return 0
        })

        return(
            <TeamMembersWrapper>

                {team
                    .map(member => (
                        <TeamMembersCard key={member.fields.id} member={member.fields}/>
                    ))}

            </TeamMembersWrapper>
        )
    }
}

TeamMembers.propTypes = {
    team: PropTypes.array
}

TeamMembers.defaultProps = {
    team: [],
}

export default TeamMembers
