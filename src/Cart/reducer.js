import React from 'react'

const reducer = (state, action) => {
  // clear cart
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  // remove one item
  if (action.type === 'REMOVE_ITEM') {
    const newItems = state.cart.filter((item) => item.id !== action.payload)

    return {
      ...state,
      cart: newItems,
    }
  }
  // increase item
  if (action.type === 'INCREASE') {
    let inCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })

    return { ...state, cart: inCart }
  }
  // decrease item
  if (action.type === 'DECREASE') {
    let deCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((item) => item.amount !== 0)

    return { ...state, cart: deCart }
  }
  return state
}

export default reducer
