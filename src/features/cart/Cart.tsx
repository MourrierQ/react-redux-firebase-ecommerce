import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Styles from './Cart.module.css'
import { addProduct, selectCart } from './cartSlice'

export function Cart() {
    const cart = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    return (
        <div className={Styles.cart}>
            <h1>{cart.visible}</h1>
            <button onClick={() => dispatch(addProduct({name: "Lelele"}))}>Add Product</button>
        </div>
    )
}
