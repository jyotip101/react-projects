import React from 'react'
import { useGlobalContext } from './Contaxt'

const CartItem = ({ id, photo, title, price, amount, rating }) => {
  const { removeCart, increase, decrease } = useGlobalContext()

  return (
    <>
      <div className='cart-card'>
        <img src={photo} alt={title} />
        <div className='cart-decs'>
          <h4>{title}</h4>
          <div className='cart-price'>
            <h4>
              <i className='material-icons'>star</i>
              {rating}
            </h4>
            <h4>${price}</h4>
          </div>
          <div className='btn-contant'>
            <button onClick={() => increase(id)}>
              <i className='material-icons'>add_circle</i>
            </button>
            <span>{amount}</span>
            <button onClick={() => decrease(id)}>
              <i className='material-icons'>remove_circle</i>
            </button>
          </div>
          <button className='remove-btn' onClick={() => removeCart(id)}>
            <i className='material-icons'>remove_shopping_cart</i>remove
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem
