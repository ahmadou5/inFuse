'use client'
import { useEffect, useState } from "react";
import { IoArrowDown, IoArrowUp, IoScan, IoSettings } from "react-icons/io5";

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
            <div className="w-[145px]  ml-auto mr-[63px] py-1 px-3 flex  items-center justify-center bg-gothic-600 rounded-full h-9">
                <p className="text-white font-light ml-auto mr-auto ">{user?.initDataUnsafe?.user?.username}</p>
            </div>
            </div>
            <div className="w-[15%]">
             <IoSettings className="w-7 mt-0.5 h-7 ml-auto mr-5 text-gothic-600/85"/>
            </div>
        </div>
        <div className="bg-gothic-950/0 mt-12 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-s-gray-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[140px]">
                <p className="text-6xl  text-gothic-200/85">{`$${50}`}</p>
            </div>
        </div>
        <div className="bg-gothic-950/0 mt-7 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-gothic-300/5 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
                <div className="text-xl bg-gothic-600/0 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoArrowUp className="text-2xl text-gothic-600/85" />
                  <p className="text-sm font-light ">Send</p>
                </div>
                <div className="text-3xl bg-gothic-600/0 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoArrowDown className="text-3xl text-gothic-600/85" />
                  <p className="text-xl font-light ">Receive</p>
                </div>
                <div className="text-xl bg-gothic-600/0 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoScan className="text-3xl text-gothic-600/85"/>
                  <p className="text-xl font-light ">Scan</p>
                </div>
            </div>
        </div>
    </div>
)
}