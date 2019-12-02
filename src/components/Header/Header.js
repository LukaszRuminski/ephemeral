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
    AceMenuMobile,
    AceHiddenMenu,
    AceIconClose,
    AceIconMenu,
    AceMenuLinkMobile
} from './Header.styles'

class Header extends Component {

    state = {
        menuOpen: false
    }

    render() {
        const { secondary, router, withoutLogo } = this.props
        const { menuOpen } = this.state

        return (
            <Fragment>
                <AceHeader secondary={secondary}>

                    <AceBrandWrapper href='/' withoutLogo={withoutLogo}>
                        <AceLogo src='/static/images/logo.png' alt={'ACE Card as a team logo'}/>
                        <AceCircle secondary={secondary}/>
                        <AceBrandName secondary={secondary}>ACE TEAM</AceBrandName>
                    </AceBrandWrapper>

                    <AceMenu>
                        <AceMenuLink href='/team' secondary={secondary}
                            active={router.pathname === '/team'}>Team</AceMenuLink>
                        <AceMenuLink href='/portfolio' secondary={secondary}
                            active={router.pathname === '/portfolio'}>Portfolio</AceMenuLink>
                        <AceMenuLink href='/blog' secondary={secondary}
                            active={router.pathname === '/blog'}>Blog</AceMenuLink>
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
                            <AceMenuLinkMobile href='/team' secondary={secondary}>
                                Team
                            </AceMenuLinkMobile>
                            <AceMenuLinkMobile href='/portfolio' secondary={secondary}>
                                Portfolio
                            </AceMenuLinkMobile>
                            <AceMenuLinkMobile href='/blog' secondary={secondary}>
                                Blog
                            </AceMenuLinkMobile>
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
