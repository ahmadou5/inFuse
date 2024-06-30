'use client'
import { GlobalContext } from "@/Context/AppContext"
import { useState } from "react"
import { formatAddress } from "@/Utils/format"
import { ethers, parseUnits } from "ethers"
import { TransactionSuccessModal } from "./TransactionSuccess"
import { FailedTxModal } from "./TransactionFailed"
import { Supabase } from "@/Utils/supabasedb"
import { SpinningCircles } from "react-loading-icons"
import { useGetUserId } from "@/hooks/useGetUserId"
export const SendModal = () => {
    const [loading, setIsLoading] = useState(false)
    const { setIsSend, userPkey, ethPrice, ethBalance, userAddress, isTxFail,setIsTxFail,isTxSuccess,setIsTxSuccess,user } = GlobalContext()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [receiveAddress, setReceiveAddress] = useState('')
    const [comment, setComment] = useState('')
    const [amount,setAmount] = useState(0)
    const Provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com')
    const wallet = new ethers.Wallet(userPkey,Provider)
    const Data = useGetUserId()
    const multiple = (x,y) => {
        return x*y;
      }
    const id = user?.initDataUnsafe?.user?.id
    
    const handleSendETH = async() => {
        setIsLoading(true)
        //const signer = Provider.getSigner(user)
        const signedTx = await wallet.sendTransaction({
            to: receiveAddress,
            value: parseUnits(amount,'ether')
        })
       
        setIsTxSuccess(true)
        setIsLoading(false)
        const txr = signedTx.hash
        await setComment(txr)
        if (signedTx && signedTx.hash) {
        const tx = signedTx.hash
        console.log(tx,'tx here')
        const {data, error} = await Supabase
        .from('History')
        .insert([{id:id,sender:userAddress,receiver:receiveAddress,amount:amount,hash:tx,isSend:true}])
        .select()
        if(data) {
            console.log(data,'data')
            
        }
        if(error) {
            console.log(error)
        }
        }
       
    }
   
    return(
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
            <div className="">
                <div onClick={() => setIsSend(false)} className="w-20 rounded-xl text-white text-xl font-light flex items-center justify-center h-9 bg-black/85">
                    <p>esc</p>
                </div>
            </div>
            {
                isConfirmed ? 
            <div className="mt-8 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] h-12 bg-slate-50/0 rounded-xl py-3 px-6">
                <p className="text-[19px] text-black font-light">{`to: ${formatAddress(receiveAddress)}`}</p>
               </div>
               <div className="w-[98%] mt-4 ml-auto mr-auto h-[230px] py-3 px-2 flex flex-col items-center justify-center rounded-2xl bg-black/20">
                <div className="w-[100%] ml-auto mr-auto text-black rounded-xl  flex  h-16">
                 <input onChange={(e) => setAmount(e.target.value)} type="text" className="outline-none bg-transparent text-end text-3xl ml- w-[50%] h-[100%] " value={amount} />
                 <p className="mt-5 text-xl font-light ml-1 mr-auto">ETH</p>
                </div>
                   <div className="bg-black/0 rounded-2xl w-[120px] border border-black h-9">
                      <p className="text-black text-center py-1.5">{multiple(ethPrice,amount).toString().slice(0,6)}</p>
                    </div>
               </div>
               <div>
                <div className="h-12 w-[100%] flex items-center justify-between py-1 px-2 bg-red-500/0 mt-8">
                    <div className="bg-black/20 rounded-2xl w-20 h-9">
                      <p className="text-black text-center py-1.5">MAX</p>
                    </div>
                    <div className="text-s-gray-950">
                      <p>{`Available: ${ethBalance.toString().slice(0,5)} ETH`}</p>
                    </div>
                </div>
               <div className="mt-10 w-[100%] ml-auto mr-auto">
             <div className="w-[98%] ml-auto mr-auto py-1 rounded-xl bg-black/90 h-14">
                 <button onClick={() => {
                    if(receiveAddress !== '' && amount > 0) {
                        handleSendETH()
                    }
                 }} className="outline-none bg-transparent w-[100%] h-[100%] text-white  py-2 px-4">{loading ? <SpinningCircles className="ml-auto mr-auto h-7 w-7" /> : 'Continue'}</button>
             </div>
            </div>
            {isTxSuccess && <TransactionSuccessModal hash={comment} amount={amount}/>}
            {isTxFail && <FailedTxModal/>}
               </div>
            </div> : 
            <div className="mt-8 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
            <div className="mt-12 w-[100%] ml-auto mr-auto">
            <div className="w-[100%] ml-auto mr-auto mb-4 flex rounded-xl text-[19px] text-black/75 py-3 px-3 border items-center justify-center border-black bg-black/0 h-12">
               <p className=" text-black font-light">From:</p>
               <p className=" text-black font-light">{formatAddress(userAddress)}</p>
             </div>
             <div className="w-[100%] mt-1 ml-auto mr-auto rounded-xl text-xl border border-black bg-black/75 h-12">
                 <input onChange={(e) => setReceiveAddress(e.target.value)} type="text" className="outline-none text-[19px] text-white bg-transparent w-[100%] h-[100%]  py-2 px-4" placeholder="Enter Address" />
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