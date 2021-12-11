import React from 'react'
import { data } from './Data'
import { useGlobalContext } from './Context'

const Header = () => {
  const { openSunbMenu, closeSubMenu } = useGlobalContext()
  console.log(data)
  return (
    <>
      <nav className='nav-contaner'>
        <div className='nav-contant'>
          <div className='nav-items'>
            <span className='material-icons'>logo_dev</span>
            <button className='menu-btn' onClick={openSunbMenu}>
              <i className='material-icons'>menu</i>
            </button>
          </div>
          <ul className='nav-links'>
            {data.map((item, index) => {
              const { page, links } = item
              return (
                <li key={index}>
                  <button className='link-btn'>{page}</button>
                </li>
              )
            })}
          </ul>
          <button className='signin-btn'>Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Header
