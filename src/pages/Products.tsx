import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addProduct } from '../features/cart/cartSlice'
import { fetchProductsAsync, selectProducts } from '../features/product/productSlice'



export default function Products() {
    const dispatch = useAppDispatch()
    const products = useAppSelector(selectProducts)
    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [dispatch])
    return (
        <div>
            <button onClick={() => dispatch(addProduct({...products[0], quantity: 1}))}>
                {products.length ? products[0].name : null}
            </button>
        </div>
    )
}
