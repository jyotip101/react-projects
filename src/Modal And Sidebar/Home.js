import React from 'react'
import './Home.css'
import { useGlobalContext } from './Context'
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  return (
    <>
      <main>
        <button className='menu-button' onClick={openSidebar}>
          <i className='material-icons'> menu_open </i>
        </button>
        <button className='modal-button' onClick={openModal}>
          Show Modal
        </button>
      </main>
    </>
  )
}

export default Home
