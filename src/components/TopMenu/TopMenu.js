import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TopMenu extends Component {
    render() {
        const { user, onLogout } = this.props

        return (
            <div>
                Menu
                <a href='/register'>Register</a>
                {
                    user &&
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events
                    <a onClick={onLogout}>Logout</a>
                }
            </div>
        )
    }
}

TopMenu.propTypes = {
    user: PropTypes.object,
    onLogout: PropTypes.func
}
