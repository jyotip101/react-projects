import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

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
        openSubMenu,
        openModal,
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
