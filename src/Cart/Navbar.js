import React from 'react'
import { useGlobalContext } from './Contaxt'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-contant'>
          <h3>Your Cart</h3>
          <div className='nav-icons'>
            <i className='material-icons'>shopping_cart</i>
            <div className='cart-amount'>
              <p className='amount'>4</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
// ;;<span class='material-icons-outlined'>expand_less expand_more</span>
export default Navbar
