import { GlobalContext } from "@/Context/AppContext"
import { useGetUserId } from "@/hooks/useGetUserId"

export const SuccessModal = () => {
    const Data = useGetUserId()
    const { setWelcome, userName, setIsAuthenticate, isSuccess,setIsSuccess } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/85 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px-3 justify-center">
            <div className="h-[190px] ml-auto mr-auto py-2 px-2 w-[90%] bg-white/95 rounded-xl">
            
            <div className="mt-5 ml-auto mr-auto flex flex-col items-center justify-center text-center">
                <p className="text-center text-black font-light text-[18px] mb-4">{`🎉🎉 Congratulations 🎉🎉`} </p>
                <div className="w-[175px]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-white/30 rounded-full h-9">
                  <p className="text-black/85 font-light ml-auto mr-auto ">{'You Just Create Your Ethereum Wallet'}</p>
                </div>
                <div onClick={() => {
                    setIsSuccess(false)
                    setIsAuthenticate(true)
                    console.log(Data)
                    }} className="w-[175px] mt-6  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-black/90 rounded-full h-9">
                  <p>Next</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}