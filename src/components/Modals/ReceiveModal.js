'use client'
import { GlobalContext } from "@/Context/AppContext"
import { useQRCode } from "next-qrcode"

export const ReceiveModal = () => {
    const { setIsReceive, userAddress } = GlobalContext()
    const { Canvas } = useQRCode()
    return(
    <div className="inset-0 fixed bg-black/75 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-[#4f4f4f] rounded-t-3xl h-auto mt-[140px]">
            <div>
                <div onClick={() => setIsReceive(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/5">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-2 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] h-12 bg-slate-50/0 rounded-xl py-3 px-6">
               
               </div>
               <div className="w-[98%] mt-4 ml-auto mr-auto h-[290px] py-3 px-2 flex flex-col items-center justify-center rounded-2xl bg-white">
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                    <Canvas text={'HEloo'} options={{width:275}} className='w-[100%] ml-auto mr-auto rounded-xl h-[100%] text-blue-600' />
                </div>
               </div>
               <div>
               <div className="mt-10 w-[100%] ml-auto mr-auto">
             <div className="w-[98%] ml-auto mr-auto rounded-xl bg-white/90 h-14">
                 <button className="outline-none bg-transparent w-[100%] h-[100%] text-black  py-2 px-4">Send</button>
             </div>
            </div>
               </div>
            </div>
        </div>
    </div>
)
}