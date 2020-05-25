import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import routerConfig from 'Config/router.config'
import PropTypes from 'prop-types'
import {
    AceHeader,
    AceBrandWrapper,
    AceLogo,
    AceCircle,
    AceBrandName,
    AceMenu,
    AceMenuLink,
    AceLoginLink,
    AceMenuMobile,
    AceHiddenMenu,
    AceIconClose,
    AceIconMenu,
    AceMenuLinkMobile
} from './Header.styles'

import { AuthContext } from '../../auth/authContext'

class Header extends Component {
    static contextType = AuthContext

    state = {
        menuOpen: false
    }

    showLoginLogout = () => {
        const { authenticated, startLogout, startAuthentication } = this.context
        return authenticated ?
            <AceLoginLink onClick={startLogout.bind(this.context)} >Logout</AceLoginLink> :
            <AceLoginLink onClick={startAuthentication.bind(this.context)} >Login</AceLoginLink>
    }

    render() {
        const { authenticated } = this.context
        const { secondary, router, withoutLogo } = this.props
        const { menuOpen } = this.state

        const showLoginLogout = this.showLoginLogout()

        return (
            <Fragment>
                <AceHeader secondary={secondary}>

                    <AceBrandWrapper href='/' withoutLogo={withoutLogo}>
                        <AceLogo src='/static/images/logo.png' alt={'ACE Card as a team logo'}/>
                        <AceCircle secondary={secondary}/>
                        <AceBrandName secondary={secondary}>ACE TEAM</AceBrandName>
                    </AceBrandWrapper>

                    <AceMenu>
                        <AceMenuLink href={routerConfig.team.slug} secondary={secondary}
                            active={router.pathname === routerConfig.team.slug}>Team</AceMenuLink>
                        <AceMenuLink href={routerConfig.portfolio.slug} secondary={secondary}
                            active={router.pathname === routerConfig.portfolio.slug}>Portfolio</AceMenuLink>
                        <AceMenuLink href={routerConfig.blog.slug} secondary={secondary}
                            active={router.pathname === routerConfig.blog.slug}>Blog</AceMenuLink>
                        {authenticated && <AceMenuLink href={routerConfig.profile.slug} secondary={secondary}
                            active={router.pathname === routerConfig.profile.slug}>Profile</AceMenuLink>}
                        {showLoginLogout}
                    </AceMenu>

                    <AceMenuMobile>
                        <AceIconMenu menuOpen={menuOpen}
                            secondary={secondary}
                            src={'/static/icons/menu.svg'}
                            alt={'Hamburger menu icon'}
                            onClick={() => {
                                this.setState({ menuOpen: !menuOpen })
                            }}/>
                        <AceHiddenMenu open={menuOpen} secondary={secondary}>
                            <AceIconClose
                                src={'/static/icons/close.svg'}
                                secondary={secondary}
                                alt={'Cross close icon'}
                                onClick={() => {
                                    this.setState({ menuOpen: !menuOpen })
                                }}/>
                            <AceMenuLinkMobile href={routerConfig.team.slug} secondary={secondary}>
                                Team
                            </AceMenuLinkMobile>
                            <AceMenuLinkMobile href={routerConfig.portfolio.slug} secondary={secondary}>
                                Portfolio
                            </AceMenuLinkMobile>
                            <AceMenuLinkMobile href={routerConfig.blog.slug} secondary={secondary}>
                                Blog
                            </AceMenuLinkMobile>
                            {authenticated && <AceMenuLinkMobile href={routerConfig.profile.slug} secondary={secondary}>
                                Profile</AceMenuLinkMobile>}
                            {showLoginLogout}
                        </AceHiddenMenu>
                    </AceMenuMobile>

                </AceHeader>
            </Fragment>
        )
    }
}

Header.propTypes = {
    secondary: PropTypes.bool,
    withoutLogo: PropTypes.bool,
    router: PropTypes.object
}

Header.defaultProps = {
    secondary: false,
    withoutLogo: false,
    router: {}
}

export default withRouter(Header)
