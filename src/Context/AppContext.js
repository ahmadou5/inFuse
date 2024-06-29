'use client'
import { createContext, useContext, useState } from "react";


const MiniContext = createContext()


export const MiniContextProvider = ({children}) => {
    const [hReceiver,setHReceiver] = useState('')
    const [hSender,setHSender] = useState('')
    const [hHash,setHHash] = useState('')
    const [hIsSend,setHIsSend] = useState(false)
    const [hDate,setHDate] = useState(null)
    const [hAmount,setHAmount] = useState(0)
    const [isTCard,setIsTCard] = useState(false)
    const [isWallet,setIsWallet] = useState(true)
    const [isTokens,setIsTokens] = useState(false)
    const [isHistory,setIsHistory] = useState(false)
    const [one,setOne] = useState('')
    const [two,setTwo] = useState('')
    const [three,setThree] = useState('')
    const [four,setFour] = useState('')
    const [five,setFive] = useState('')
    const [six,setSix] = useState('')
    const [seven,setSeven] = useState('')
    const [eight,setEight] = useState('')
    const [nine,setNine] = useState('')
    const [ten,setTen] = useState('')
    const [eleven,setEleven] = useState('')
    const [twelve,setTwelve] = useState('')
    const [isImport,setIsImport] = useState(false)
    const [isTxSuccess,setIsTxSuccess] = useState(false)
    const [isTxFail,setIsTxFail] = useState(false)
    const [isErrorM,setIsErrorM] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false)
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
    isSuccess,
    isErrorM,
    isTxSuccess,
    isTxFail,
    isImport,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    isWallet,
    isTokens,
    isHistory,
    isTCard,
    hReceiver,
    hSender,
    hIsSend,
    hAmount,
    hDate,
    hHash,
    setHHash,
    setHDate,
    setHAmount,
    setHIsSend,
    setHSender,
    setHReceiver,
    setIsTCard,
    setIsHistory,
    setIsTokens,
    setIsWallet,
    setTwelve,
    setEleven,
    setTen,
    setNine,
    setEight,
    setSeven,
    setSix,
    setFive,
    setFour,
    setThree,
    setTwo,
    setOne,
    setIsImport,
    setIsTxFail,
    setIsTxSuccess,
    setIsErrorM,
    setIsSuccess,
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