"use client";
import { GlobalContext } from "@/Context/AppContext";
import { useQRCode } from "next-qrcode";
import { formatAddress, handleCopy, chains } from "@/Utils/format";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const FaucetModal = () => {
  const { setIsReceive, userAddress, isFaucet, setIsFaucet } = GlobalContext();
  const { Canvas } = useQRCode();
  return (
    <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
      <div className="w-[100%] py-4 px-4 bg-white/95 rounded-t-3xl h-auto mt-[70px]">
        <div>
          <div
            onClick={() => setIsFaucet(false)}
            className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85"
          >
            <p>esc</p>
          </div>
        </div>
        <div className="mt-1 px-2 py-3 bg-red-600/0 h-[85%] flex flex-col rounded-xl w-[99%] ml-auto mr-auto">
          <div className="w-[100%] mt-7 mb-5 font-bold text-[19px] mb-1 text-black text-center h-auto bg-slate-50/0 rounded-xl py-2 px-2">
            <p>Get Testnet Tokens From Faucets</p>
          </div>

          <div>
            {chains &&
              chains.map((item, i) => (
                <>
                  <Link href={item.faucet} target="_blank">
                    <div
                      key={i}
                      className="w-[97%] mt-2 mb-2 bg-black/15 flex rounded-2xl h-18"
                    >
                      <div className="h-[80%] w-[26%] py-1.5 px-2">
                        <img
                          src={item.imgUrl}
                          className="h-[83%] rounded-full mt-0 w-[80%]"
                        />
                      </div>
                      <div className="h-[100%] text-black ml-auto mr-2 font-light  mt-1 w-[60%] py-1 px-2">
                        <div className="mt-1">
                          <p className="text-sm">{`Get ${item.Tick} Test Tokens`}</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div className="mt-2 py-3 px-4">
                        <IoArrowForward className="text-xl text-black" />
                      </div>
                    </div>
                  </Link>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
