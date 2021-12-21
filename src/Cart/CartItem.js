import React from 'react'

const CartItem = ({ id, photo, title, amount, rating }) => {
  return (
    <>
      <div className='cart-card'>
        <img src={photo} alt={title} />
        <div className='cart-decs'>
          <h4>{title}</h4>
          <div className='cart-price'>
            <h4>{amount}</h4>
            <h4>
              <i className='material-icons'>star</i>
              {rating}
            </h4>
          </div>
          <div className='btn-contant'>
            <button>
              <i className='material-icons'>add_circle</i>
            </button>{' '}
            <span>1</span>
            <button>
              <i className='material-icons'>remove_circle</i>
            </button>
          </div>
          <button className='remove-btn'>
            <i className='material-icons'>remove_shopping_cart</i>remove
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem
