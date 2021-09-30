import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/auth/authSlice'
import UserMini from '../components/user/UserMini'
import Styles from "./Nav.module.css"
import { TiShoppingCart } from "react-icons/ti"
import CartButton from '../components/cart/CartButton'


const Nav : React.FC = () => {
    const user = useAppSelector(selectUser);
    return (
        <div className={Styles.nav}>
            <div className={Styles.navContainer}>
                <div className={Styles.header}>
                    <div className={Styles.logo}><img src="https://redux-toolkit.js.org/img/redux.svg" alt="logo"/></div>
                    <div className={Styles.title}>React Redux Ecommerce</div>
                </div>
                <ul className={Styles.links}>
                    {user ? <li><UserMini/></li> : null}
                    <li>{user ? "Logout" : "Login"}</li>
                    <li><CartButton/></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav