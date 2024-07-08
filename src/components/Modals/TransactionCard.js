"use client";
import { GlobalContext } from "@/Context/AppContext";
import Link from "next/link";
import { useQRCode } from "next-qrcode";
import { formatAddress, handleCopy } from "@/Utils/format";

export const TransactionModal = () => {
  const {
    setIsReceive,
    userAddress,
    scan,
    isTCard,
    setIsTCard,
    hAmount,
    setHAmount,
    hReceiver,
    setHReceiver,
    hSender,
    setHSender,
    hDate,
    hHash,
    setHHash,
    setHDate,
    hIsSend,
    setHIsSend,
  } = GlobalContext();

  return (
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
      <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
        <div>
          <div
            onClick={() => setIsTCard(false)}
            className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85"
          >
            <p>esc</p>
          </div>
        </div>
        <div className="w-[40%] mt-4 mb-3 ml-auto mr-auto flex items-center justify-center bg-black/25 h-10 rounded-3xl ">
          <p className="text-black font-bold">{`${hIsSend === true ? 'Sent' : 'Received'}`}</p>
        </div>
        <div className="mt-1 px-2 py-3 mb-10 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
          <div className="w-[98%] mt-1 mb-10 ml-auto mr-auto h-[290px] py-3 px-1 flex flex-col items-center justify-center rounded-2xl bg-black/60">
            <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
              <div className="bg-white/0 border-b-black/25 border-t-black/0 border border-white/0 w-[99%] flex items-center justify-center rounded-sm h-[70px]">
                <div className="ml-[5px]   text-white  mr-auto px-3">
                  <p className="text-sm mb-1.5">Date:</p>
                </div>
                <div className="ml-[10px]   text-white mr-4 px-3">
                  <p className="text-[23] mb-1.5">{hDate}</p>
                </div>
              </div>
              <div className="bg-white/0 border-b-black/25 border-t-black/25 border border-white/0 w-[99%] flex items-center justify-center rounded-sm h-[70px]">
                <div className="ml-[5px]  text-white  mr-auto px-3">
                  <p className="text-sm mb-1.5">Status:</p>
                </div>
                <div className="ml-[10px]  text-white   mr-4 px-3">
                  <p className="text-[23] text-green-600 mb-1.5">{'Succeded'}</p>
                </div>
              </div>
              <div className="bg-white/0 border-b-black/25 border-t-black/25 border border-white/0 w-[99%] flex items-center justify-center rounded-sm h-[70px]">
                <div className="ml-[5px]  text-white  mr-auto px-3">
                  <p className="text-sm mb-1.5">{`${hIsSend ? 'To' : 'From'}`}</p>
                </div>
                <div className="ml-[10px]  mr-4 px-3">
                  <p className="text-[23] mb-1.5">{formatAddress(hReceiver)}</p>
                </div>
              </div>
              <div className="bg-white/0 border-b-black/0 border-t-black/25 border border-white/0 w-[99%] flex items-center justify-center rounded-sm h-[70px]">
                <div className="ml-[5px]  text-white mr-auto px-3">
                  <p className="text-sm mb-1.5">Amount:</p>
                </div>
                <div className="ml-[10px]   text-white mr-4 px-3">
                  <p className="text-[23] mb-1.5">{hAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 w-[100%] ml-auto mr-auto">
            <Link href={`https://${scan}/${hHash}`} target="_blank">
            <div
                
                className="w-[100%] mb-5   ml-auto mr-auto py-1 mt-3 px-3 flex  items-center justify-center bg-black/80 rounded-xl h-14"
              >
                <p className="text-white font-light text-[16px] ml-auto mr-auto ">
                  View on Explorer
                </p>
              </div>
            </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
