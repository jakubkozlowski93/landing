import React, { useState, useContext } from 'react'

export const AppContex = React.createContext({
  data: [],
})

const AppProviders = ({ children }) => {
  const data = [1, 2, 3]

  return (
    <AppContex.Provider
      value={{
        data,
      }}
    >
      {children}
    </AppContex.Provider>
  )
}

export default AppProviders
