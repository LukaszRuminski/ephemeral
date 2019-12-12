import React, { Component } from 'react'
import TeamMembersCard from "./TeamMembersCard/TeamMembersCard"
import PropTypes from 'prop-types'
import { TeamMembersWrapper } from './TeamMembers.styles'

class TeamMembers extends Component{

    render(){
        const { team } = this.props

        team.sort((a,b)=>{
            if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1
            if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1
            return 0
        })

        return(
            <TeamMembersWrapper>

                {team
                    .map(member => (
                        <TeamMembersCard key={member.sys.id} {...member}/>
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
