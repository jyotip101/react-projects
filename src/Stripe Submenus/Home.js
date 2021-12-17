import React from 'react'
import { useGlobalContext } from './Context'

const Home = () => {
  const { closeSubMenu } = useGlobalContext()

  return (
    <>
      <div className='hero-container' onMouseOver={closeSubMenu}>
        <div className='hero-center'>
          <div className='hero-item-1'>
            <h1 className='hero-header'>
              Lorem ipsum dolor sit consectetur adipisicing
            </h1>
            <p className='hero-decs'>
              Lorem ipsum dolor sit amet consectetur elit. Atque nulla
              perferendis reiciendis aliquid recusandae magni quos, quia magnam
              animi. Similique assumenda officiis corporis.
            </p>

            <button className='start-btn'>start now</button>
          </div>
          <div className='hero-item-2'>
            <span className='material-icons'>timeline timeline timeline</span>
            <span className='material-icons'>timeline timeline timeline</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
