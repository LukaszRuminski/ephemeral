import {Log, UserManager, WebStorageStateStore} from 'oidc-client'
import {oidcSettings} from './oidcSettings'

class AuthService {

    constructor(settings){
        this.settings = settings
        this.manager = new UserManager({
            ...this.settings,
            managerStore: new WebStorageStateStore({store: sessionStorage})
        })

        this.manager.events.addUserLoaded(() => {
            if (window.location.href.indexOf("code") !== -1) {
                this.navigateToScreen();
            }
        })

        this.manager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.startLogout();
        })

        Log.logger = console;
        Log.level = Log.ERROR;
    }

    getUser = async () => {
        const user = await this.manager.getUser()

        if (!user) {
            return this.manager.signinRedirectCallback()
        }
        await this.manager.storeUser(user);

        return user
    }


    isAuthenticated = () => {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`))

        const valid = !!oidcStorage && this.callEndpoint("/profiles/oidc/userinfo")

        return (!!valid && !!oidcStorage.access_token)

    }

    callEndpoint = (endpoint) =>  {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`))
        const url = process.env.PROVIDER + endpoint

        return fetch(url, {
            headers: {
                'Authorization': "Bearer " + oidcStorage.access_token
            }
        }).then(res => !!res)
    }

    createAuthenticationRequest = () => {
        return this.manager.createSigninRequest();
    }

    startAuthentication = () => {
        sessionStorage.setItem('redirectUri', window.location.pathname);
        return this.manager.signinRedirect()
    }

    completeAuthentication = () => {
        this.manager.signinRedirectCallback()
            .then(() => {
                return this.getUser()
            })
            .catch((error) => {
                this.navigateToScreen();
                this.handleError(error)
        })
    }

    createLogoutRequest = () => {
        return this.manager.createSignoutRequest();
    }

    startLogout = () => {
        const post_logout_redirect_uri = encodeURIComponent(oidcSettings.post_logout_redirect_uri.toString())
        this.manager.clearStaleState()
            .then(() => {
                sessionStorage.clear();
                window.open(process.env.PROVIDER + '/auth-ui/logout?client_id=' + process.env.CLIENT_ID + '&redirect_uri=' + post_logout_redirect_uri, "_self")
            })
            .catch((error) => this.handleError(error))
    }

    navigateToScreen = () => {
        window.location.replace(sessionStorage.getItem('redirectUri'))
    }

    handleError(error) {
        console.error("Problem with authentication endpoint: ", error);
    }

}

export default AuthService
