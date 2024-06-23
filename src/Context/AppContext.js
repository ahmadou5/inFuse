'use client'
import { createContext, useContext, useState } from "react";


const MiniContext = createContext()


export const MiniContextProvider = ({children}) => {
    const [ethBalance,setEthBalance] = useState(0)
    const [ethPrice,setEthPrice] = useState(0)
    const [isSend,setIsSend] = useState(false)
    const [isReceive,setIsReceive] = useState(false)
    const [isScan,setIsScan] = useState(false)
    const [isAuthenticate,setIsAuthenticate] = useState(false)
    const [user,setUser ] = useState(null);
    const [userAddress,setUserAddress] = useState('')
    const [userName, setUserName] = useState('')
    const [userPkey,setUserPkey] = useState('')
    const [userMnemonic,setUserMnemonic] = useState([])
    const [welcome,setWelcome] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
   const value = {
    user,
    userAddress,
    userPkey,
    userMnemonic,
    isAuthenticate,
    isSend,
    isReceive,
    isScan,
    welcome,
    isLoading,
    userName, 
    ethPrice,
    ethBalance,
    setEthBalance,
    setEthPrice,
    setUserName,
    setIsLoading,
    setWelcome,
    setIsScan,
    setIsReceive,
    setIsSend,
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