import { GlobalContext } from "@/Context/AppContext"

export const ErrorModal = ({message}) => {
    const { setWelcome, userName, isErrorM,setIsErrorM } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/75 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px- justify-center">
            <div className="h-[190px] ml-auto mr-auto py-2 px-2 w-[90%] bg-white/95 rounded-xl">
            
            <div className="mt-5 ml-auto mr-auto flex flex-col items-center justify-center text-center">
                <p className="text-center text-black/85 font-light text-[18px] mb-5">{`😔😔 We Encounter an Error ⚠️ `} </p>
                <div className="w-[175px]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-white/30 rounded-full h-9">
                  <p className="text-black/85 text-[19px] font-light ml-auto mr-auto ">{message.includes('null value in column') ? 'No telegram account Detected' : 'User Already Exist'}</p>
                </div>
                <div onClick={() => setIsErrorM(false)} className="w-[175px] mt-6 ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-black/95 rounded-full h-9">
                  <p className="text-white font-light ml-auto mr-auto ">{'Next'}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}