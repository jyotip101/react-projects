import React from 'react'
import { useGlobalContext } from './Contaxt'

const Navbar = () => {
  const { amount } = useGlobalContext()
  return (
    <>
      <nav>
        <div className='nav-contant'>
          <h3>Your Cart</h3>
          <div className='nav-icons'>
            <i className='material-icons'>shopping_cart</i>
            <div className='cart-amount'>
              <p className='amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
