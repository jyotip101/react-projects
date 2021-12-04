import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <span class='material-icons'>logo_dev</span>
            <button className='menu-button'>
              <i className='material-icons'>drag_handle</i>
            </button>
          </div>
          <div className='links-container'>
            <ul className='links'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Products</a>
              </li>
            </ul>
          </div>
          <ul className='social-icons'>
            <li>
              <a href='https://twitter.com'>
                <i className='material-icons'>insert_emoticon</i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com'>
                <i className='material-icons'>insert_emoticon</i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com'>
                <i className='material-icons'>insert_emoticon</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
