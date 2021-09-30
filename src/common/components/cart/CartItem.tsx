import React from 'react'
import Product from "../../../models/Product"
import Styles from "./CartItem.module.css"

const CartItem : React.FC<Product> = (product) => {
    return (
        <div className={Styles.cartItem}>
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <p>{product.quantity}</p>
            <p>{product.id}</p>
        </div>
    )
}

export default CartItem
