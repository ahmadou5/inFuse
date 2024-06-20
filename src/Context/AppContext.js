'use client'
import { createContext, useContext } from "react";


const MiniContext = createContext()


export const MiniContextProvider = ({children}) => {
   const value = {}
   return(
   <MiniContext.Provider value={value}>
    {children}
   </MiniContext.Provider>
   )
}

export const GlobalContext = () => useContext(MiniContext)