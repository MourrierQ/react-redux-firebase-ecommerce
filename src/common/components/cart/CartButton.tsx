import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCart, toggleVisible } from '../../../features/cart/cartSlice';
import Styles from "./CartButton.module.css";

export default function CartButton() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart)
    return (
        <button className={Styles.cartButton} onClick={() => dispatch(toggleVisible())}>
            <TiShoppingCart/>
            <span className={Styles.cartContent}>{cart.products.length}</span>
        </button>
    )
}
