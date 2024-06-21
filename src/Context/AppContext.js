'use client'
import { createContext, useContext, useState } from "react";


const MiniContext = createContext()


export const MiniContextProvider = ({children}) => {
    const [isAuthenticate,setIsAuthenticate] = useState(false)
    const [user,setUser ] = useState(null);
    const [userAddress,setUserAddress] = useState('')
    const [userPkey,setUserPkey] = useState('')
    const [userMnemonic,setUserMnemonic] = useState('')
   const value = {
    user,
    userAddress,
    userPkey,
    userMnemonic,
    isAuthenticate,
    setIsAuthenticate,
    setUserMnemonic,
    setUserPkey,
    setUserAddress,
    setUser
   }
   return(
   <MiniContext.Provider value={value}>
    {children}
   </MiniContext.Provider>
   )
}

export const GlobalContext = () => useContext(MiniContext)