import React from 'react'
import { nav, sociallIcon } from './Data'
import './Sidebar.css'
import { useGlobalContext } from './Context'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <>
      <nav>
        <div className={`${isSidebarOpen ? 'nav-center' : 'hide-nav'}`}>
          <div className='nav-header'>
            <span className='material-icons'>logo_dev</span>
            <button className='close-button' onClick={closeSidebar}>
              <i className='material-icons'>close </i>
            </button>
          </div>
          <div className='links-container'>
            <ul className='links'>
              {nav.map((item) => {
                const { id, text, url } = item
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {sociallIcon.map((item) => {
              const { id, url, icon } = item
              return (
                <li key={id}>
                  <a href={url}>
                    <i className='material-icons'>{icon}</i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
