import React from 'react'
import { data } from './Data'
import { useGlobalContext } from './Context'

const Header = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext()
  const showSubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom + 12
    openSubMenu(page, { center, bottom })
  }
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }
  return (
    <>
      <nav className='nav-contaner' onMouseOver={handleSubMenu}>
        <div className='nav-contant'>
          <div className='nav-items'>
            <span className='material-icons'>logo_dev</span>
            <button className='menu-btn' onClick={openSidebar}>
              <i className='material-icons'>menu</i>
            </button>
          </div>
          <ul className='nav-links'>
            {data.map((item, index) => {
              const { page } = item
              return (
                <li key={index} className='navbar-link'>
                  <button className='link-btn' onMouseOver={showSubMenu}>
                    {page}
                  </button>
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
