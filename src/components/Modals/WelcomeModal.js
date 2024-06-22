import { GlobalContext } from "@/Context/AppContext"

export const Welcome = () => {
    const { setWelcome, userName } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/35 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px- justify-center">
            <div className="h-[170px] ml-auto mr-auto py-2 px-2 w-[90%] bg-s-gray-500 rounded-xl">
            <div>
                <div onClick={() => setWelcome(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/75">
                    <p className="text-black">esc</p>
                </div>
            </div>
            <div className="mt-5 ml-auto mr-auto flex items-center justify-center text-center">
                <p className="text-center mb-2">{`👋 hi Welcome Back`} </p>
                <div className="w-[175px]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-white/10 rounded-full h-9">
                  <p className="text-white font-light ml-auto mr-auto ">{userName}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}