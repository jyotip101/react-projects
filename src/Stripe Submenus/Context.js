import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubMenu = () => {
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
