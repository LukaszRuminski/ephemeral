import {Log, UserManager, WebStorageStateStore} from 'oidc-client'
import {oidcSettings} from './oidcSettings'

export class AuthService {
    manager

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
        const user = await this.manager.getUser();

        if (!user) {
            console.info('Please log in')
            return false
        }
        await this.manager.storeUser(user);

        return user
    }


    isAuthenticated = () => {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`))

        const valid = !!oidcStorage && this.validateUser(oidcStorage)

        return (!!valid && !!oidcStorage.access_token)

    }

    validateUser = (user) =>  {
        const url = process.env.PROVIDER + "/profiles/oidc/userinfo"

        return fetch(url, {
            headers: {
                'Authorization': "Bearer " + user.access_token
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
            .then(() =>  this.getUser())
            .catch((error) => {
                this.navigateToScreen();
                this.handleError(error)
        })
    }

    createLogoutRequest = () => {
        return this.manager.createSignoutRequest();
    }

    startLogout = () => {
        this.manager.clearStaleState()
            .then(() => {
                sessionStorage.clear();
                window.location.replace(oidcSettings.post_logout_redirect_uri)
            })
            .catch((error) => this.handleError(error));
    }

    navigateToScreen = () => {
        window.location.replace(sessionStorage.getItem('redirectUri'))
    }

    handleError(error) {
        console.error("Problem with authentication endpoint: ", error);
    }

}
