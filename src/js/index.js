import { ref,get } from 'firebase/database'
import { db } from './firebaseConfig'

async function pageInit() {
    const productRef = ref(db, 'products/')
    const productSnapshot = await get(productRef)
    const productData = {...productSnapshot.val()}

    const products = Object.keys(productData).map(product => {
        return(productData[product])
    })

    console.log("hello!")
    console.log(products)
}

pageInit();