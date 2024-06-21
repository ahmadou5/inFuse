'use client'
import { GlobalContext } from "@/Context/AppContext"

export const SendModal = () => {
    const { setIsSend } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-s-gray-950 rounded-t-3xl h-auto mt-[180px]">
            <div className="">
                <div onClick={() => setIsSend(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/5">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-8 px-2 py-2 bg-red-600/5 h-[85%] flex rounded-xl w-[99%] ml-auto mr-auto">
               <div className="ml-auto mr-auto ">
                 <p>Send</p>
               </div>
            </div>
        </div>
    </div>
)
}