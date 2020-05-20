import { Component } from 'react'
import { AuthContext } from '../auth/authContext'


class SignIn extends Component {

    static contextType = AuthContext

    componentDidMount() {
        const { completeAuthentication } = this.context
        completeAuthentication()
    }

    render() {
        return null
    }
}

export default SignIn
