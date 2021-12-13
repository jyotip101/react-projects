import React from 'react'
import { useGlobalContext } from './Context'
import { data } from './Data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`${isSidebarOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <i className='material-icons'>close</i>
        </button>
        <div className='sidebar-links'>
          {data.map((item, index) => {
            const { page, links } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublink'>
                  {links.map((item, index) => {
                    const { label, icon, url } = item
                    return (
                      <a href={url} key={index}>
                        <i className='material-icons'>{icon}</i>
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
