import React, { useContext, useState } from 'react'
import { data } from './Data'
const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubMenu = (text, coordinates) => {
    const page = data.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubMenu,
        closeSidebar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
