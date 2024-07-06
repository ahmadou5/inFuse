'use client'
import { GlobalContext } from "@/Context/AppContext"
import { useQRCode } from "next-qrcode"
import { formatAddress, handleCopy } from "@/Utils/format"
import Link from "next/link"

export const FaucetModal = () => {
    const { setIsReceive, userAddress,isFaucet, setIsFaucet } = GlobalContext()
    const { Canvas } = useQRCode()
    return(
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
            <div>
                <div onClick={() => setIsFaucet(false)} className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-1 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] font-light text-[19px] mb-1 text-black text-center h-auto bg-slate-50/0 rounded-xl py-2 px-2">
                 <p>Get Testnet Tokens From Faucet</p>
               </div>
               
               <div>
               
               </div>
            </div>
        </div>
        <Link  target="_blank">
                   <p className="text-black font-light ml-auto mr-auto ">{`Tx Hash: ${formatAddress(hash)}`}</p>
                  </Link> 
    </div>
)
}