import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import {
    Card,
    Description,
    MemberInfo,
    MemberInfoText,
    MemberProfilePic,
    DescriptionWrapper
} from './TeamMembersCard.styles'

class TeamMembersCard extends Component {

    render() {
        const { member } = this.props
        return (
            <Card>
                <MemberInfo>
                    <MemberProfilePic src={`https://res.cloudinary.com/mwace/image/upload/w_90,q_auto,f_auto/${member.imageUrl}`} alt={member.imageAltText}/>
                    <MemberInfoText>
                        <div>{member.firstName}</div>
                        <div>{member.lastName}</div>
                    </MemberInfoText>
                </MemberInfo>
                <DescriptionWrapper>
                    <Description><Markdown source={member.description} escapeHtml={false}/></Description>
                </DescriptionWrapper>
            </Card>
        )
    }
}

TeamMembersCard.propTypes = {
    member: PropTypes.shape({
        imageUrl: PropTypes.string,
        imageAltText: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        description: PropTypes.string
    })
}

TeamMembersCard.defaultProps = {
    imageUrl: '',
    firstName: 'First name',
    lastName: 'Last name',
    description: 'Default description'
}

export default TeamMembersCard
