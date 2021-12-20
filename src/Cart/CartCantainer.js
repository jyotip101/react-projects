import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Contaxt'

const CartCantainer = () => {
  const { cart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <>
        <main className='cart-container'>
          <div className='cart-empty'>
            <h2>Your bag</h2>
            <h4> add item in your bag</h4>
          </div>
        </main>
      </>
    )
  }
  return (
    <>
      <main className='cart-container'>
        <div className='cart-empty'>
          <h2>Your bag</h2>
          <h4> add item in your bag</h4>
        </div>
      </main>
    </>
  )
}

export default CartCantainer
