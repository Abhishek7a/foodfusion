import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ItemCard from '../components/ItemCard'
import Cart from '../components/Cart'

export default function ItemPage() {
    const [cart, setcart] = useState<boolean>(false)

    const openCart = () => {
        setcart(!cart);
    }
    return (
        <>
            <Navbar openCart={openCart} />
            <ItemCard openCart={openCart} />
            <Footer />
            {cart === true ? <Cart openCart={openCart} /> : ""}
        </>
    )
}
