'use client'
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { IoArrowDown, IoArrowUp, IoKey, IoScan, IoSettings } from "react-icons/io5";
import { Menu } from "./menu";
import { GlobalContext } from "@/Context/AppContext";
import { Supabase } from "@/Utils/supabasedb";
import { useGetUserId } from "@/hooks/useGetUserId";

export const Create = () => {
    const {user,setUser,userPkey,setUserPkey,userAddress,setUserAddress,userMnemonic,setUserMnemonic} = GlobalContext()
    const userID = useGetUserId()
    const Provider = 'https://eth-sepolia.g.alchemy.com/v2/demo'
    const createWallet = async () => {
            const name = user?.initDataUnsafe?.user?.username
            const id = user?.initDataUnsafe?.user?.id
            const userWallet = ethers.Wallet.createRandom(Provider);
            setUserAddress(userWallet.address)
            setUserPkey(userWallet.privateKey)
            setUserMnemonic(userWallet.mnemonic.phrase)

            const {data ,error} = await Supabase
            .from('Wallets')
            .insert([{id:id,username:name,address:userAddress,privateKey:userPkey,phrase:userMnemonic}])
            .select()
            if(error) {
                alert('error',error.message)
                console.log(error)
            }
            if(data) {
                alert('data',data)
            }
           
    }
    useEffect(() => {
        console.log(Supabase)
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
        <div className="bg-gothic-950/0 mt-[80px] mb-[40px] flex items-center justify-center w-[100%] h-auto">
            <img src="./assets/chain1.svg" className="w-[40%] h-[150px]" />
        </div>
        <div className="bg-gothic-950/0 mt-3 mb-8 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-s-gray-300/0 w-[90%] px-10 flex flex-col items-center justify-center rounded-3xl h-[140px]">
                <p className="text-3xl font-extrabold mb-6 text-gothic-200/85">{`infuse`}</p>
                <p className="text-sm font-extrabold text-center mt-4 text-gothic-200/85">{`Hi ${user?.initDataUnsafe?.user?.username} ${user?.initDataUnsafe?.user?.id} Create a new wallet or import an existing one`}</p>
            </div>
        </div>
        <div className="bg-s-gray-300/0 w-[95%] ml-auto mr-auto mt-10 mb-12 px-2 flex flex-col items-center justify-center rounded-2xl h-auto">
                <button onClick={() => createWallet()} className="text-xl bg-s-gray-900/75 w-[290px] mb-3 h-12 text-gothic-200 rounded-xl font-extrabold ">{`Create `}</button>
                <button className="text-xl bg-gothic-200 w-[290px] text-s-gray-700 mt-3 h-12 rounded-xl font-extrabold ">{`Import`}</button>
        </div>
    </div>
)
}