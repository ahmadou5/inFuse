'use client'
import { GlobalContext } from "@/Context/AppContext"
import { useQRCode } from "next-qrcode"
import { formatAddress, handleCopy } from "@/Utils/format"

export const ReceiveModal = () => {
    const { setIsReceive, userAddress } = GlobalContext()
    const { Canvas } = useQRCode()
    return(
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
            <div>
                <div onClick={() => setIsReceive(false)} className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-1 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] font-light text-[19px] mb-1 text-black text-center h-auto bg-slate-50/0 rounded-xl py-2 px-2">
                 <p>Send FUSE and FRC20 tokens only to this address, or you might lose your funds</p>
               </div>
               <div className="w-[98%] mt-1 ml-auto mr-auto h-[290px] py-3 px-2 flex flex-col items-center justify-center rounded-2xl bg-white/90">
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                    <Canvas text={userAddress} options={{width:295}} className='w-[100%] ml-auto mr-auto rounded-xl h-[100%] text-blue-600' />
                </div>
               </div>
               <div>
               <div className="mt-4 w-[100%] ml-auto mr-auto">
                <div className="mt-2 mb-2">
                 <p className="text-black/60 text-center font-light ml-auto mr-auto ">{formatAddress(userAddress)}</p>
                </div>
               <div onClick={() => handleCopy(userAddress)} className="w-[105px] mb-5   ml-auto mr-auto py-1 mt-3 px-3 flex  items-center justify-center bg-black/80 rounded-full h-9">
                 <p className="text-white font-light text-[18px] ml-auto mr-auto ">copy</p>
               </div>
             </div>
               </div>
            </div>
        </div>
    </div>
)
}