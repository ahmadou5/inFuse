"use client";
import { GlobalContext } from "@/Context/AppContext";
import { Supabase } from "@/Utils/supabasedb";
import Link from "next/link";
import { useQRCode } from "next-qrcode";
import { formatAddress, handleCopy } from "@/Utils/format";
import { useState } from "react";
import { useGetUserId } from "@/hooks/useGetUserId";
import {
  IoArrowDown,
  IoArrowForward,
  IoArrowUp,
  IoKey,
  
  IoScan,
  IoSettings,
} from "react-icons/io5";
import PriceChart from "../Home/chart";
export const TokenInfoModal = () => {
  
  const {
    user,
    setIsReceive,
    tokenAddress,
    tokenName,
    tokenTicker,
    tokenDecimals,
    isTokenInfo,setIsTokenInfo,
    providerName,
    setTokenDecimals,
    setTokenTicker,
    setTokenName,
    isTokenModal,setIsTokenModal,
    userAddress,
    setTokenAddress,
    setHIsSend,
  } = GlobalContext();
  const id = user?.initDataUnsafe?.user?.id
  
  return (
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
      <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[55px]">
        <div>
          <div
            onClick={() => setIsTokenInfo(false)}
            className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85"
          >
            <p>esc</p>
          </div>
        </div>
        <div className="mt-1 px-2 py-3 mb-10 bg-red-600/0 h-[95%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
          <div className="w-[100%] h-[200px] mb-2 rounded-xl bg-black/0">
          <div className="bg-s-gray-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[90px]">
              <p className="text-4xl mt-0 mr-1 ml-1 text-black/85">{` ${679 }`}</p>
              <p className="text-2xl mt-2  text-black/85">{` ${'ETH'}`}</p>
            </div>
            <div className="bg-gothic-950/0 mt-1 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-gothic-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
              <div
               
                className="text-xl bg-[#d1d1d1] flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60"
              >
                <IoArrowUp className="text-2xl text-black" />
                <p className="text-sm mt-2.5 text-black font-light ">Send</p>
              </div>
              <div
                
                className="text-3xl  bg-[#d1d1d1] flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60"
              >
                <IoArrowDown className="text-2xl text-black" />
                <p className="text-sm mt-2.5 text-black font-light ">
                  Receive
                </p>
              </div>
              
            </div>
          </div>
          </div>
          <div className="w-[100%] h-[130px] flex mt-2 mb-2 border border-black/20 rounded-xl bg-black/0">
             <div className=" py-4 w-[50%] px-2">
             <div className="text-black">
              679 ETH
              </div>
              <div className="text-black">
              {`$${679*3004}`}
             </div>
             </div>
             <div className=" py-4 w-[50%] px-2">
              <PriceChart />
             </div>
          </div>
          <div className="w-[100%] h-[90px] mt-2 mb-1 rounded-xl border border-black/20">
          <div className=" py-4 w-[100%] px-2">
             <div className="text-black">
              ETH
              </div>
              <div className="text-black">
               Network
             </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
