'use client'
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { GlobalContext } from "@/Context/AppContext"
export const useGetTransaction = () => {
    const { setIsSend, userPkey, ethPrice, ethBalance, userAddress, isTxFail,setIsTxFail,isTxSuccess,setIsTxSuccess,user } = GlobalContext()
    const Provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com')
    const [trx,setTrx] = useState([])
    useEffect(() => {
      const listener = async () => {
        const blockN = await Provider.getBlockNumber()
        const block = await Provider.getBlock(blockN);
        const newTx = block.transactions.filter((tx) => tx.to === userAddress)
        setTrx(newTx)
        console.log(newTx)
      }
      Provider.on('block',listener)
      const startBlock = () => {}
    },[])
    return trx;
}