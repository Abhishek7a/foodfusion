import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserInfo from '../components/UserInfo'
import Cart from '../components/Cart'

export default function UserProfile() {
    const [cart, setcart] = useState(false)

    const openCart = () => {
        setcart(!cart);
    }
    return (
        <>
            <Navbar openCart={openCart} />
            <UserInfo />
            <Footer />
            {cart === true ? <Cart openCart={openCart} /> : ""}
        </>
    )
}
