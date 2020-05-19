import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'

const SignIn = ()  => {
    const context = useContext(AuthContext)
    context.completeAuthentication()

    return null
}

export default SignIn
