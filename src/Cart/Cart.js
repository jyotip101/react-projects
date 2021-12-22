import React from 'react'
import Navbar from './Navbar'
import CartCantainer from './CartCantainer'
import './cart.css'
import { useGlobalContext } from './Contaxt'

const Cart = () => {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <CartCantainer />
    </>
  )
}

export default Cart
