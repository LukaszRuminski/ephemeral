export const oidcSettings = {
    authority: process.env.PROVIDER + '/login',
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.DOMAIN_URL + '/sign-in',
    response_type: 'code',
    scope: 'openid profile email address phone',
    post_logout_redirect_uri: process.env.DOMAIN_URL,
    revokeAccessTokenOnSignout: true,
    monitorSession: true
}
