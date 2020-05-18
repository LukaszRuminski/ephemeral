import React, { Component } from 'react'
import {AuthService} from './authService'
import {oidcSettings} from './oidcSettings'

export const AuthContext = React.createContext({
    createAuthenticationRequest: () => ({}),
    startAuthentication: () => ({}),
    completeAuthentication: () => ({}),
    isAuthenticated: () => ({}),
    createLogoutRequest: () => ({}),
    startLogout: () => ({}),
    completeLogout: () => ({}),
    getUser: () => ({})
});

export class AuthProvider extends Component {
    authService;
    constructor(props) {
        super(props);
        this.authService = new AuthService(oidcSettings);
    }
    render() {
        return <AuthContext.Provider value={this.authService}>{this.props.children}</AuthContext.Provider>;
    }
}
