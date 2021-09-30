import React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authSlice'

export default function Signin() {
    const dispatch = useAppDispatch()
    return (
        <div>
            <GoogleLoginButton onClick={() => dispatch(login("google"))}/>
        </div>
    )
}
