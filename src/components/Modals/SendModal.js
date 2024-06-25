'use client'
import { GlobalContext } from "@/Context/AppContext"
import { useState } from "react"
import { formatAddress } from "@/Utils/format"
import { ethers, parseUnits } from "ethers"
import { TransactionSuccessModal } from "./TransactionSuccess"
import { FailedTxModal } from "./TransactionFailed"
export const SendModal = () => {
    const { setIsSend, userPkey, ethBalance, userAddress, isTxFail,setIsTxFail,isTxSuccess,setIsTxSuccess } = GlobalContext()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [receiveAddress, setReceiveAddress] = useState('')
    const [comment, setComment] = useState('')
    const [amount,setAmount] = useState(0)
    const Provider = new ethers.JsonRpcProvider('https://sepolia.gateway.tenderly.co')
    const wallet = new ethers.Wallet(userPkey,Provider)

    const handleSendETH = async() => {
        const tx = {
            to: '0x31Fe9fE81BfFD55F8C442CB022dcF8f65fFD26B4',
            value: parseUnits(amount, 'ether'),
        }
        //const signer = Provider.getSigner(user)
        const signedTx = await wallet.sendTransaction({
            to: receiveAddress,
            value: parseUnits(amount,'ether')
        })
        const txHash = signedTx.hash()
        //const receipt = await Provider.getTransactionReceipt(txHash)
        setComment(txHash)
        setIsTxSuccess(true)
        console.log(txHash)
    }
    return(
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
            <div className="">
                <div onClick={() => setIsSend(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-black/85">
                    <p>esc</p>
                </div>
            </div>
            {
                isConfirmed ? 
            <div className="mt-8 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] h-12 bg-slate-50/0 rounded-xl py-3 px-6">
                <p className="text-[16px] font-light">{`to: ${formatAddress(receiveAddress)}`}</p>
               </div>
               <div className="w-[98%] mt-4 ml-auto mr-auto h-[230px] py-3 px-2 flex flex-col items-center justify-center rounded-2xl bg-black/20">
                <div className="w-[100%] ml-auto mr-auto text-black rounded-xl  flex  h-16">
                 <input onChange={(e) => setAmount(e.target.value)} type="number" className="outline-none bg-transparent text-end text-3xl ml- w-[50%] h-[100%] " value={amount} />
                 <p className="mt-5 text-xl font-light ml-1 mr-auto">ETH</p>
                </div>
               </div>
               <div>
                <div className="h-12 w-[100%] flex items-center justify-between py-1 px-2 bg-red-500/0 mt-8">
                    <div className="bg-black/20 rounded-2xl w-20 h-9">
                      <p className="text-black text-center py-1.5">MAX</p>
                    </div>
                    <div className="text-s-gray-950">
                      <p>{`Available: ${ethBalance.toString().slice(0,4)} ETH`}</p>
                    </div>
                </div>
               <div className="mt-10 w-[100%] ml-auto mr-auto">
             <div className="w-[98%] ml-auto mr-auto rounded-xl bg-black/90 h-14">
                 <button onClick={() => {
                    if(receiveAddress !== '' && amount > 0) {
                        handleSendETH()
                    }
                 }} className="outline-none bg-transparent w-[100%] h-[100%] text-white  py-2 px-4">Continue</button>
             </div>
            </div>
            {isTxSuccess && <TransactionSuccessModal hash={comment} amount={amount}/>}
            {isTxFail && <FailedTxModal/>}
               </div>
            </div> : 
            <div className="mt-8 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
            <div className="mt-12 w-[100%] ml-auto mr-auto">
            <div className="w-[100%] ml-auto mr-auto mb-4 flex rounded-xl text-[19px] text-black/75 py-3 px-3 border items-center justify-center border-black bg-black/0 h-16">
               <p className="font-light">From:</p>
               <p className="font-light">{formatAddress(userAddress)}</p>
             </div>
             <div className="w-[100%] ml-auto mr-auto rounded-xl text-xl border border-black bg-black/0 h-16">
                 <input onChange={(e) => setReceiveAddress(e.target.value)} type="text" className="outline-none text-[19px] text-black/75 bg-transparent w-[100%] h-[100%]  py-2 px-4" placeholder="Address" />
             </div>
            </div>
            
            <div className="mt-20 w-[100%] ml-auto mr-auto">
             <div className="w-[97%] ml-auto mr-auto rounded-xl bg-black/90 h-14">
                 <button onClick={() => {
                    if(receiveAddress.length < 42) {
                        alert('not Valid ETH Address')
                    } else {
                        setIsConfirmed(true)
                    }
                 }} className="outline-none bg-transparent w-[100%] h-[100%] text-white/95  py-2 px-4">Continue</button>
             </div>
            </div>
         </div>
            }
        </div>
    </div>
)
}