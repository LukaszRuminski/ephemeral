import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
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
import Link from 'next/link'


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
                        <Link href="/team">
                            <AceMenuLink  secondary={secondary}
                                active={router.pathname === '/team'}>Team</AceMenuLink>
                        </Link>
                        <Link href="/portfolio">
                        <AceMenuLink secondary={secondary}
                            active={router.pathname === '/portfolio'}>Portfolio</AceMenuLink>
                        </Link>
                        <Link href="/blog">
                        <AceMenuLink secondary={secondary}
                            active={router.pathname === '/blog'}>Blog</AceMenuLink>
                        </Link>
                        {authenticated &&
                        <Link href="/profile">
                            <AceMenuLink secondary={secondary}
                                active={router.pathname === '/profile'}>Profile</AceMenuLink>
                        </Link>}
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
                            <Link href="/team">
                                <AceMenuLinkMobile href='/team' secondary={secondary}>
                                    Team
                                </AceMenuLinkMobile>
                            </Link>
                            <Link href="/team">
                                <AceMenuLinkMobile href='/portfolio' secondary={secondary}>
                                    Portfolio
                                </AceMenuLinkMobile>
                            </Link>
                            <Link href="/team">
                                <AceMenuLinkMobile href='/blog' secondary={secondary}>
                                    Blog
                                </AceMenuLinkMobile>
                            </Link>
                            {authenticated && <Link href="/team">
                                <AceMenuLinkMobile href='/profile' secondary={secondary}>
                                    Profile</AceMenuLinkMobile>
                            </Link>}
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
