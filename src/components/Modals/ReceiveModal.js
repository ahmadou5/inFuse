'use client'
import { GlobalContext } from "@/Context/AppContext"

export const ReceiveModal = () => {
    const { setIsReceive } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] py-4 px-4 bg-black rounded-t-3xl h-auto mt-[180px]">
            <div>
                <div onClick={() => setIsReceive(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/5">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-2 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
               <div className="w-[100%] h-12 bg-slate-50/0 rounded-xl py-3 px-6">
               
               </div>
               <div className="w-[98%] mt-4 ml-auto mr-auto h-[290px] py-3 px-2 flex flex-col items-center justify-center rounded-xl bg-slate-400/5">
                <div className="w-[100%] ml-auto mr-auto rounded-xl  flex  h-16">
                 <input  type="number" className="outline-none bg-transparent text-end text-4xl ml- w-[50%] h-[100%] " value={0} />
                 <p className="mt-5 text-xl font-light ml-1 mr-auto">ETH</p>
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