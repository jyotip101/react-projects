import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './Context'

const SubMunu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const sMenu = container.current
    const { center, bottom } = location
    sMenu.style.left = `${center}px`
    sMenu.style.top = `${bottom}px`
  }, [location])
  return (
    <aside
      className={`${
        isSubMenuOpen ? 'submenu-container show' : 'submenu-container'
      }`}
      ref={container}
    >
      <div className='submenu-contant'>
        <p className='sub-con'></p>

        <div className='submenu-items'>
          <h4>{page}</h4>
          <div className='subMenu-links'>
            {links.map((link, index) => {
              const { icon, url, label } = link
              return (
                <a href={url} key={index}>
                  <i className='material-icons'> {icon}</i>
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SubMunu
