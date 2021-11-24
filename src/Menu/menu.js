import React, { useState } from 'react'
import './Menu.css'
import Header from './Header'
import List from './List'
import Data from './Data'

const category = ['all', ...new Set(Data.map((item) => item.category))]

const Menu = () => {
  const [data, setdata] = useState(Data)
  const [categories, setCategories] = useState([category])

  const selectCategory = (category) => {
    if (category === 'all') {
      setdata(Data)
      return
    }
    const curCategory = Data.filter((item) => item.category === category)
    setdata(curCategory)
  }
  return (
    <>
      <div>
        <h1>Our Menu</h1>
        <Header selectCategory={selectCategory} categories={categories} />
        <List data={data} />
      </div>
    </>
  )
}

export default Menu
