import { GlobalContext } from "@/Context/AppContext"
import { useGetUserId } from "@/hooks/useGetUserId"
import { formatAddress } from "@/Utils/format"
import Link from "next/link"

export const TransactionSuccessModal = ({hash,amount}) => {
    const { setWelcome, userName,isTxSuccess,setIsTxSuccess, setIsSend } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/85 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px-3 justify-center">
            <div className="h-[220px] ml-auto mr-auto py-2 px-2 w-[90%] bg-white/95 rounded-xl">
            
            <div className="mt-5 ml-auto mr-auto flex flex-col items-center justify-center text-center">
                <p className="text-center text-black font-light text-[18px] mb-4">{`Transaction Success 🎉🎉`} </p>
                <div className="w-[175px]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-white/30 rounded-full h-9">
                  <p className="text-black/85 font-light ml-auto mr-auto ">{`You just send ${amount} ETH now`}</p>
                </div>
                <div className="w-[100%]  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-white/30 rounded-full h-9">
                  <p className="text-black/85 font-light ml-auto mr-1 ">{`Tx Hash:`}</p>
                  <Link href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank">
                   <p className="text-black font-light ml-1 mr-auto ">{`${formatAddress(hash)}`}</p>
                  </Link> 
                </div>
                <div onClick={() => {
                    setIsSend(false)
                    setIsTxSuccess(false)

                    console.log(Data)
                    }} className="w-[175px] mt-3  ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-black/90 rounded-full h-9">
                  <p>Next</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}