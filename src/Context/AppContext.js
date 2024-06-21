'use client'
import { createContext, useContext, useState } from "react";


const MiniContext = createContext()


export const MiniContextProvider = ({children}) => {
    const [user,setUser ] = useState(null)
   const value = {
    user,
    setUser
   }
   return(
   <MiniContext.Provider value={value}>
    {children}
   </MiniContext.Provider>
   )
}

export const GlobalContext = () => useContext(MiniContext)