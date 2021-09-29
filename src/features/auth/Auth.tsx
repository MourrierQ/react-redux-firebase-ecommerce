import React, {useState, useEffect} from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { useAppDispatch } from '../../app/hooks';
import { login } from './authSlice';


function Auth(){
    const dispatch = useAppDispatch();
    return (
    <div>
        <GoogleLoginButton onClick={() => dispatch(login('google'))}/>
        <FacebookLoginButton onClick={() => dispatch(login('facebook'))}/>
    </div>
    )
}

export default Auth
