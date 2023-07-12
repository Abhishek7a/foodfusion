import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import OrderForm from '../components/OrderForm'

export default function Home() {
  const [cart, setcart] = useState(false)

  const openCart = () => {
    setcart(!cart);
  }
  return (
    <>
      <Navbar openCart={openCart} />
      <OrderForm />
      <Footer />
      {cart === true ? <Cart openCart={openCart} /> : ""}
    </>
  )
}
