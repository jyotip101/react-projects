import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Contaxt'

const CartCantainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <>
        <main className='cart-container'>
          <div className='cart-empty'>
            <header>
              <h1>your bag</h1>
            </header>
            <h4> Add items in your bag</h4>
          </div>
        </main>
      </>
    )
  }
  return (
    <>
      <main className='cart-container'>
        <header>
          <h1>your bag</h1>
        </header>
        <div className='cart-items'>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>total</h4>
            <h4>${total}</h4>
          </div>
          <button className='clear-btn' onClick={clearCart}>
            clear cart
          </button>
        </footer>
      </main>
    </>
  )
}

export default CartCantainer
