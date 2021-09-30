import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { selectUser } from '../../../features/auth/authSlice'
import Styles from "./UserMini.module.css"

export default function UserMini() {
    const user = useAppSelector(selectUser)
    console.log(user);
    return (
        <div className={Styles.userMini}>
            <img src={user?.photoURL} alt={user?.displayName} width="28" height="28"/>
            <p>{user?.displayName}</p>
        </div>
    )
}
