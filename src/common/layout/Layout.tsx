import React from 'react'
import { Cart } from '../../features/cart/Cart'
import Footer from './Footer'
import Nav from './Nav'
import Styles from "./Layout.module.css"


const Layout:React.FC = ({children}) => {
    return (
        <div className={Styles.layout}>
            <Nav/>
            <div className={Styles.container}>{children}</div>
            <Cart/>
            <Footer/>
        </div>
    )
}

export default Layout
