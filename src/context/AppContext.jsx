import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorVariant, setCursorVariant] = useState('default')
  const [menuOpen, setMenuOpen] = useState(false)

  const value = {
    isLoading,
    setIsLoading,
    cursorVariant,
    setCursorVariant,
    menuOpen,
    setMenuOpen,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}