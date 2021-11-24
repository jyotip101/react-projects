import React from 'react'

const Header = ({ categories, selectCategory }) => {
  return (
    <>
      <header className='header'>
        {categories[0].map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => selectCategory(item)}
              className='btn'
            >
              {item}
            </button>
          )
        })}
      </header>
    </>
  )
}

export default Header
