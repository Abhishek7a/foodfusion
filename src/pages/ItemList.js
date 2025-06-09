import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

export default function ItemList() {
    const [cart, setcart] = useState(false)

    const openCart = () => {
        setcart(!cart);
    }
    return (
        <>
            <Navbar openCart={openCart} />
            <ProductList />
            <Footer />
            {cart === true ? <Cart openCart={openCart} /> : ""}
        </>
    )
}
