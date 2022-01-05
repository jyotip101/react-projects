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

  if (action.type === 'GET_TOTAl') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, items) => {
        const { price, amount } = items
        const itemTotal = price * amount
        cartTotal.amount += amount
        cartTotal.total += itemTotal
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    return { ...state, total: parseFloat(total.toFixed(3)), amount }
  }

  throw new Error('no matching action type')
}

export default reducer
