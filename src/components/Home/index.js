import { IoSettings } from "react-icons/io5";

export const Home2 = () => {
    return(
    <div className="w-[100%] py-2 px-1 h-auto bg-red-400/0">
        <div className="w-[100%] h-12 flex  py-3 ">
            <div className="w-[85%]">
            <div className="w-[145px]  ml-auto mr-[63px] py-1 px-3 flex  items-center justify-center bg-s-gray-200/85 rounded-full h-8">
                <p className="text-black font-light ml-auto mr-auto ">Wallet</p>
            </div>
            </div>
            <div className="w-[15%]">
             <IoSettings className="w-7 h-7 ml-auto mr-5 text-s-gray-200/60"/>
            </div>
        </div>
    </div>
)
}