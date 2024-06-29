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
        const pastTransactions = await Provider.getLogs({
            fromBlock: Math.max(0, blockN - 100), // Check past 100 blocks
            toBlock: blockN,
            address:userAddress,
          });
          const newReceivedTransactions = pastTransactions.filter((tx) => tx.to === userAddress).filter((tx, index, self) => tx.to === userAddress &&
            self.findIndex((t) => t.hash === tx.hash) === index
          );
        const userTransactions = block.transactions
        setTrx(newReceivedTransactions)
        console.log('block',blockN)
        console.log('User',userTransactions)
      }
      Provider.on('block',listener)
      const startBlock = () => {}
    },[])
    return trx;
}