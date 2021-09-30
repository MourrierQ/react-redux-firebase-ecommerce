import { collection, getDocs } from '@firebase/firestore';
import {db} from "../../firebase/Firebase"
import Product from '../../models/Product';

export const fetchAllProductsAsync = () => {
    return new Promise<Product[]>((resolve) => {
        getDocs(collection(db, "products")).then((querySnapshot) => {
            const products : Product[] = []
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                products.push({...data, id: doc.id, quantity: 1} as Product)
            })
            console.log(products);
            return resolve(products)
        })

    })
}