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

        this.manager.events.addUserSessionChanged(() => console.log('session'))

        this.manager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.startLogout();
        })

        Log.logger = console;
        Log.level = Log.DEBUG;
    }

    getUser = async () => {
        const user = await this.manager.getUser();

        if (!user) {
            return  this.manager.signinRedirectCallback();
        }
        await this.manager.storeUser(user);

        return  await user
    }


    isAuthenticated = () => {
        const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`))

        return (!!oidcStorage && !!oidcStorage.access_token)
    }

    createAuthenticationRequest = () => {
        return this.manager.createSigninRequest();
    }

    startAuthentication = () => {
        sessionStorage.setItem('redirectUri', window.location.pathname);
        return this.manager.signinRedirect()
    }

    completeAuthentication= () => {
        this.manager.signinRedirectCallback()
            .then(() => this.getUser())
            .catch((error) => this.handleError(error));
    }

    createLogoutRequest = () => {
        return this.manager.createSignoutRequest();
    }

    startLogout() {
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
