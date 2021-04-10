import React, { useState } from 'react'

export const Context = React.createContext({})

export default function ShortContextProvider({ children }) {
  const [shorts, setShorts] = useState([])

  return (
    <Context.Provider value={{ shorts, setShorts }}>
      {children}
    </Context.Provider>
  )
}
