import React, { useContext, useEffect, useReducer, useState } from 'react'
import data from './data'
import reducer from './reducer'

const initState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}
const AppContext = React.createContext()
const AppArovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const removeCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTAl' })
  }, [state.cart])

  return (
    <>
      <AppContext.Provider
        value={{ ...state, clearCart, removeCart, increase, decrease }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppArovider }
