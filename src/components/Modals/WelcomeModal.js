import { GlobalContext } from "@/Context/AppContext"

export const Welcome = () => {
    const { setWelcome} = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/95 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px- justify-center">
            <div className="h-[170px] ml-auto mr-auto w-[80%] bg-white/15 rounded-xl">
            <div>
                <div onClick={() => setWelcome(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/5">
                    <p>esc</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}