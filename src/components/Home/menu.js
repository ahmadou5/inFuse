"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoFlash, IoHome, IoWallet } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";




export const Menu = () => {
   const [isHome, setIsHome] = useState(true)
   const [isHistory, setIsHistory] = useState(false)
   const [isTokens, setIsTokens] = useState(false)
  
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
          className=" w-[93%] ml-auto mr-auto rounded-full py-1 px-1.5 z-100 mt-[560px]  fixed inset-x-0 top-2 flex justify-center items-center"
        >
          <div className="lg:py-2.5 py-1.5 lg:px-2.5 px-1.5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div onClick={() => {
              setIsHistory(false)
              setIsTokens(false)
              setIsHome(true)
            }} className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <IoWallet size={28} className={`${ isHome ? 'text-white' : 'text-gothic-600/85'}`} />
                {isHome && <p className={`font-light ${isHome ? 'text-white' : 'text-gothic-200'} text-[12px]`}>Wallet</p>}
            </div>
            <div onClick={() => {
              setIsHistory(true)
              setIsTokens(false)
              setIsHome(false)
            }}
             className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <IoFlash size={28} className={`${ isHistory ? 'text-white' : 'text-gothic-600/85'}`} />
                {isHistory && <p className={`font-light ${isHistory ? 'text-white' : 'text-gothic-200'} text-[12px]`}>History</p>}
            </div>
            <div onClick={() => {
              setIsHistory(false)
              setIsTokens(true)
              setIsHome(false)
            }} className={`h-12 ml-auto mr-auto w-[30%] bg-white/0 flex flex-col items-center justify-center`}>
                <BsCoin size={28} className={`${ isTokens ? 'text-white' : 'text-gothic-600/85'}`} />
                {isTokens && <p className={`font-light ${isTokens ? 'text-white' : 'text-gothic-200'} text-[12px]`}>Tokens</p>}
            </div>
          </div>          
        </div>
      </>
    );
  };