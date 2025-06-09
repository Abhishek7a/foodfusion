import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import OrderTrack from '../components/OrderTrack'

export default function TrackPage() {
    const [cart, setcart] = useState(false)

    const openCart = () => {
        setcart(!cart);
    }
    return (
        <>
            <Navbar openCart={openCart} />
            <OrderTrack />
            <Footer />
            {cart === true ? <Cart openCart={openCart} /> : ""}
        </>
    )
}
