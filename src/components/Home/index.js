'use client'
import { useEffect, useState } from "react";
import { IoArrowDown, IoArrowUp, IoKey, IoScan, IoSettings } from "react-icons/io5";
import { Menu } from "./menu";
import { SendModal } from "../Modals/SendModal";
import { GlobalContext } from "@/Context/AppContext";
import { ReceiveModal } from "../Modals/ReceiveModal";
import { Supabase } from "@/Utils/supabasedb";

export const Home2 = () => {
    const [user,setUser ] = useState(null)
    const [displayAddress,setDisplayAddress] = useState('')
    const { isSend,
        isReceive,
        isScan,
        setIsScan,
        setIsReceive,
        setIsSend} = GlobalContext()
    const getUser = () => {
        
    }
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const {data ,error} = await Supabase
                .from('Wallets')
                .select('*')
                .eq('id',user?.initDataUnsafe?.user?.id)
                .single()
               if(error) throw error
               if(data) {
                alert('data',data)
                setIsAuthenticate(true)
               }
             } catch (error) {
                console.log(error)
             }
        }
        fetchUser()
    },[])
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
            <div className="w-[145px]  ml-auto mr-[63px] py-1 px-3 flex  items-center justify-center bg-white/10 rounded-full h-9">
                <p className="text-white font-light ml-auto mr-auto ">{displayAddress}</p>
            </div>
            </div>
            <div className="w-[15%]">
             <IoSettings className="w-7 mt-0.5 h-7 ml-auto mr-5 text-gothic-600/85"/>
            </div>
        </div>
        <div className="bg-gothic-950/0 mt-3 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-s-gray-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[140px]">
                <p className="text-4xl  text-gothic-200/85">{`$ ${0}`}</p>
            </div>
        </div>
        <div className="bg-gothic-950/0 mt-3 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-gothic-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
                <div onClick={() => setIsSend(true)} className="text-xl bg-white/10 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoArrowUp className="text-2xl text-white" />
                  <p className="text-sm mt-2.5 text-white font-light ">Send</p>
                </div>
                <div onClick={() => setIsReceive(true)} className="text-3xl  bg-white/10 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoArrowDown className="text-2xl text-white" />
                  <p className="text-sm mt-2.5 ttext-white font-light ">Receive</p>
                </div>
                <div className="text-xl  bg-white/10 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                    <IoScan className="text-2xl text-white"/>
                  <p className="text-sm mt-2.5 text-white font-light ">Scan</p>
                </div>
            </div>
        </div>
        {/**<div className="bg-gothic-950/0 mt-16 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-gothic-300/5 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
                <div className="bg-gothic-600/85 w-9 flex items-center justify-center h-9 ml-[40px] mr-[20px] rounded-full">
                    <IoKey className="text-white/90 text-2xl" />
                </div>
                <div className="ml-[10px] mr-auto px-3">
                    <p className="text-sm">BackUp Your Seed Phrases</p>
                </div>
            </div>
    </div> **/}
        <div className="bg-gothic-950/0 mt-8 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-white/10 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
                <div className="bg-gothic-600/85 w-12 flex items-center justify-center h-12 ml-[23px] mr-[10px] rounded-full">
                    <img src="./assets/chain1.svg" className="text-white/90 w-full h-full text-2xl" />
                </div>
                <div className="ml-[5px] mr-auto px-3">
                    <p className="text-sm mb-1.5">Ethereum</p>
                    <p className="text-sm">$234</p>
                </div>
                <div className="ml-[10px] mr-4 px-3">
                    <p className="text-sm mb-1.5">0</p>
                    <p className="text-sm">$0</p>
                </div>
            </div>
        </div>
        <Menu />
        {isSend && <SendModal/>}
        {isReceive && <ReceiveModal/>}
    </div>
)
}