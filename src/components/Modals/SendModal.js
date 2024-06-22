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
            <div className="mt-8 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="ml-auto mr-auto bg-gothic-600/85 w-16 items-center justify-center h-8 flex rounded-2xl ">
                 <p className="">Send</p>
               </div>
               <div className="mt-20 w-[100%] ml-auto mr-auto">
                <div className="w-[97%] ml-auto mr-auto rounded-xl bg-black/10 h-14">
                    <input type="text" className="outline-none bg-transparent w-[100%] h-[100%]  py-2 px-4" placeholder="0x Receiver`s Address" />
                </div>
               </div>
               <div className="mt-7 w-[100%] ml-auto mr-auto">
                <div className="w-[97%] ml-auto mr-auto rounded-xl bg-black/10 h-14">
                    <input type="text" className="outline-none bg-transparent w-[100%] h-[100%]  py-2 px-4" placeholder="Comment" />
                </div>
               </div>
            </div>
        </div>
    </div>
)
}