import React, { useContext, useState } from 'react'
import { data } from './Data'
const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
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

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSubMenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubMenu,
        openModal,
        closeSidebar,
        closeModal,
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
