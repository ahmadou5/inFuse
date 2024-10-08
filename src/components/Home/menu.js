"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoFlash, IoHome, IoSettings, IoWallet } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { GlobalContext } from "@/Context/AppContext";




export const Menu = () => {
   
   const {
    isWallet,
    isTokens,
    isHistory,
    setIsHistory,
    setIsTokens,
    setIsWallet,
   } = GlobalContext()
    const router = useRouter()
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          setCopy(true);
          setTimeout(  () => 
            setCopy(false),
            1000)
          alert('address copied to clip Board')
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    const handleCopy2 = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          console.log('Address copied to clipboard');
          alert('address copied to clip Board')
          
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    return (
      <>
        {/**for mobile view **/}
        
        {/**for desktop view **/}
        <div
          style={{ "backdrop-filter": "blur(12px)" }}
          className=" w-[93%] ml-auto mr-auto rounded-full py-1 px-1.5 z-100  fixed inset-x-0 bottom-1 flex justify-center items-center"
        >
          <div className="lg:py-2.5 py-1.5 lg:px-2.5 px-1.5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div onClick={() => {
              setIsHistory(false)
              setIsTokens(false)
              setIsWallet(true)
            }} className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <IoWallet size={28} className={`${ isWallet ? 'text-[#A3F5AA]' : 'text-gothic-600/85'}`} />
                {isWallet && <p className={`font-light ${isWallet ? 'text-[#A3F5AA]' : 'text-black'} text-[12px]`}>Wallet</p>}
            </div>
            <div onClick={() => {
              setIsHistory(true)
              setIsTokens(false)
              setIsWallet(false)
            }}
             className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <IoFlash size={28} className={`${ isHistory ? 'text-[#A3F5AA]' : 'text-gothic-600/85'}`} />
                {isHistory && <p className={`font-light ${isHistory ? 'text-[#A3F5AA]' : 'text-black'} text-[12px]`}>History</p>}
            </div>
            <div onClick={() => {
              setIsHistory(false)
              setIsTokens(true)
              setIsWallet(false)
            }} className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <IoSettings size={28} className={`${ isTokens ? 'text-[#A3F5AA]' : 'text-gothic-600/85'}`} />
                {isTokens && <p className={`font-light ${isTokens ? 'text-[#A3F5AA]' : 'text-black'} text-[12px]`}>Settings</p>}
            </div>
          </div>          
        </div>
      </>
    );
  };