'use client'
import { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";

export const Home2 = () => {
    const [user,setUser ] = useState(null)
    const getUser = () => {
        
    }
    useEffect(() => {
        console.log('useTelegram')
        function initTg() {
        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
        console.log('Telegram WebApp is set');
        const tgData = window.Telegram.WebApp
        setUser(tgData);
        } else {
        console.log('Telegram WebApp is undefined, retrying…');
        console.log(user)
        setTimeout(initTg, 500);
        }
        }
        initTg();
      }, []);
   
    return(
    <div className="w-[100%] py-2 px-1 h-auto bg-red-400/0">
        <div className="w-[100%] h-12 flex  py-3 ">
            <div className="w-[85%]">
            <div className="w-[145px]  ml-auto mr-[63px] py-1 px-3 flex  items-center justify-center bg-s-gray-200/85 rounded-full h-8">
                <p className="text-black font-light ml-auto mr-auto ">{user?.initDataUnsafe?.user?.username}</p>
            </div>
            </div>
            <div className="w-[15%]">
             <IoSettings className="w-7 mt-0.5 h-7 ml-auto mr-5 text-s-gray-200/70"/>
            </div>
        </div>
    </div>
)
}