import React from 'react'
import { data } from './Data'
import { useGlobalContext } from './Context'

const SubMunu = () => {
  const { isSubMenuOpen, closeSubMenu } = useGlobalContext()

  return <aside className=''>submenu</aside>
}

export default SubMunu
