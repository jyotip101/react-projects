import React from 'react'
import { data } from './Data'
import { useGlobalContext } from './Context'

const SubMunu = () => {
  const { isSubMenuOpen, closeSubMenu } = useGlobalContext()

  return (
    <aside className='submenu-container'>
      <div className='submenu-contant'>
        <p className='sub-con'></p>
        {data.map((item, index) => {
          const { page, links } = item
          return (
            <div key={index} className='submenu-items'>
              <h4>{page}</h4>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default SubMunu
