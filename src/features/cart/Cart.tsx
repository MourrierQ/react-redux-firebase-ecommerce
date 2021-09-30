import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Styles from './Cart.module.css'
import { addProduct, selectCart, toggleVisible } from './cartSlice'
import {VscClose} from "react-icons/vsc"
import CartItem from '../../common/components/cart/CartItem'

export function Cart() {
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const products = cart.products.map((p, i) => <li key={i.toString()}><CartItem {...p}/></li>)
    return (
        <div className={[Styles.cart, cart.visible ? Styles.visible : ""].join(" ")}>
            <ul className={Styles.productList}>
                {products}
            </ul>
            <button className={Styles.closeCart} onClick={() => dispatch(toggleVisible())}><VscClose/></button>
            {/* <button onClick={() => dispatch(addProduct({name: "Lelele"}))}>Add Product</button> */}
        </div>
    )
}
