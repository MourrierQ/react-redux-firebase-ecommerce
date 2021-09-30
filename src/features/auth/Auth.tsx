import { getAuth } from '@firebase/auth';
import React, {useEffect} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setUser } from './authSlice';


const Auth : React.FC = ({children}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString){
            const user = JSON.parse(userString);
            console.log(user);
            dispatch(setUser({
                email: user.email || "",
                displayName: user.displayName,
                photoURL: user.photoURL
            }))
        }
    }, [dispatch])
    return (
    <div>
        {children}
    </div>
    )
}

export default Auth
