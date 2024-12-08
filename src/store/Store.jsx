import React, { createContext, useState } from 'react'

export const AppContext = createContext()


const Store = ({children}) => {

    const [modalOpen,setModalOpen] = useState(false);
    const [selectedSession,setSelectedSession] = useState(true);
    const [sidebarShown,setSidebarShown] = useState(false)
  return (
    <AppContext.Provider 
      value={{
        modalOpen,
        setModalOpen,
        selectedSession,
        setSelectedSession,
        sidebarShown,
        setSidebarShown
      }}
    >
        {children}
    </AppContext.Provider>
  )
}

export default Store
