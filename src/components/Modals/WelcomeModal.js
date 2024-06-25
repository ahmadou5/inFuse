import { GlobalContext } from "@/Context/AppContext"

export const Welcome = () => {
    const { setWelcome, userName } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/75 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px- justify-center">
            <div className="h-[190px] ml-auto mr-auto py-2 px-2 w-[90%] bg-white/95 rounded-xl">
            <div>
                <div onClick={() => setWelcome(false)} className="w-16 rounded-xl text-white font-light flex items-center justify-center h-8 bg-black/95">
                    <p className="text-white text-[14]">esc</p>
                </div>
            </div>
            <div className="mt-5 ml-auto mr-auto flex flex-col items-center justify-center text-center">
                <p className="text-center text-black/95 font-light text-[22px] mb-2">{`👋 Hi Welcome Back`} </p>
                <div className="w-[175px]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-black/30 rounded-full h-9">
                  <p className="text-black font-light ml-auto mr-auto ">{userName}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}