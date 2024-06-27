"use client";
import { useEffect, useState } from "react";
import {
  IoArrowDown,
  IoArrowUp,
  IoKey,
  IoScan,
  IoSettings,
} from "react-icons/io5";
import { Menu } from "./menu";
import { SendModal } from "../Modals/SendModal";
import { GlobalContext } from "@/Context/AppContext";
import { ReceiveModal } from "../Modals/ReceiveModal";
import { Supabase } from "@/Utils/supabasedb";
import { Welcome } from "../Modals/WelcomeModal";
import { formatAddress, truncate, handleCopy } from "@/Utils/format";
import { ethers, formatEther } from "ethers";

export const Home2 = () => {
  const {
    user,
    setUser,
    userAddress,
    ethPrice,
    ethBalance,
    setEthBalance,
    welcome,
    isWallet,
    isTokens,
    isHistory,
    setIsHistory,
    setIsTokens,
    setIsWallet,
  } = GlobalContext();
  const [history, setHistory] = useState(null);
  const Provider = new ethers.JsonRpcProvider(
    "https://sepolia.gateway.tenderly.co"
  );
  const { isSend, isReceive, isScan, setIsScan, setIsReceive, setIsSend } =
    GlobalContext();

  const multiple = (x, y) => {
    return x * y;
  };
  useEffect(() => {
    const getUserTransaction = async () => {
      const { data, error } = await Supabase.from("History")
        .select("*")
        .eq("id", user?.initDataUnsafe?.user?.id);

      if (data) {
        console.log(data, "userData");
        setHistory(data);
      }
      if (error) {
        console.log(error);
        alert(error);
      }
    };
    getUserTransaction();
    const getUserEthBalance = async () => {
      try {
        const balance = await Provider.getBalance(userAddress);
        console.log(balance, "1 blnc");
        const formattedBalance = formatEther(balance);
        console.log("User ETH balance:", formattedBalance);

        setEthBalance(formattedBalance);
        return formattedBalance;
      } catch (error) {
        console.error("Error fetching ETH balance:", error);
        return null; // Handle errors gracefully
      }
    };

    getUserEthBalance();
    console.log("useTelegram");
    function initTg() {
      if (
        typeof window !== "undefined" &&
        window.Telegram &&
        window.Telegram.WebApp
      ) {
        console.log("Telegram WebApp is set");
        const tgData = window.Telegram.WebApp;
        setUser(tgData);
      } else {
        console.log("Telegram WebApp is undefined, retrying…");
        console.log(user);
        setTimeout(initTg, 500);
      }
    }
    initTg();
  }, []);

  return (
    <div className="w-[100%] py-2 px-1 h-auto bg-red-400/0">
      <div className="w-[100%] h-12 flex  py-3 ">
        <div className="w-[85%]"></div>
        <div className="w-[15%]">
          <IoSettings className="w-7 mt-0.5 h-7 ml-auto mr-5 text-black/85" />
        </div>
      </div>
      {isTokens && (
        <>
          <div className="bg-gothic-950/0 mt-1 flex  text-black mb-2 flex-col items-center justify-center w-[100%] h-auto">
            hey this is token view
          </div>
        </>
      )}
      {isHistory && (
        <>
          <div className="bg-gothic-950/0 mt-1 flex  mb-2 flex-col items-center justify-center w-[100%] h-auto">
            <div className="w-[40%] mt-0 ml-auto mr-auto flex items-center justify-center bg-black/25 h-10 rounded-3xl ">
              <p className="text-black">Transactions</p>
            </div>
            <div className="w-[96%] mt-2 py-2 px-3 h-auto rounded-md bg-black/0">
              {history &&
                history.map((item, i) => (
                  <>
                    <div className="bg-gothic-950/0 mt-8 flex items-center justify-center w-[100%] h-auto">
                      <div className="bg-white/55 w-[100%] flex items-center justify-center rounded-3xl h-[100px]">
                        <div className="bg-gothic-600/0 w-[49px] flex items-center justify-center h-12 ml-[13px] mr-[10px] rounded-full">
                          <img
                            src="./assets/send2.png"
                            className="text-white/90 w-[100%] text-white h-[100%] text-2xl"
                          />
                        </div>
                        <div className="ml-[25px] text-black/85 mr-auto px-3">
                          <p className="text-sm mb-1.5">{`Send to:${formatAddress(
                            item.receiver
                          )}`}</p>
                          <p className="text-sm">{`amount: ${item.amount}`}</p>
                        </div>
                        <div className="ml-[10px] mt-3 text-black/85 mr-4 px-3">
                         
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </>
      )}
      {isWallet && (
        <>
          <div className="bg-gothic-950/0 mt-1 flex  mb-2 flex-col items-center justify-center w-[100%] h-auto">
            <div className="bg-s-gray-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[140px]">
              <p className="text-4xl  text-black/85">{`$${multiple(
                ethBalance,
                ethPrice
              )
                .toString()
                .slice(0, 6)}`}</p>
            </div>
            <div
              onClick={() => handleCopy(userAddress)}
              className="w-[185px] mb-5  ml-auto mr-auto py-1 mt-2 px-3 flex  items-center justify-center bg-white/10 rounded-full h-9"
            >
              <p className="text-black/60 font-light ml-auto mr-auto ">
                {formatAddress(userAddress)}
              </p>
            </div>
          </div>
          <div className="bg-gothic-950/0 mt-3 flex items-center justify-center w-[100%] h-auto">
            <div className="bg-gothic-300/0 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
              <div
                onClick={() => setIsSend(true)}
                className="text-xl bg-white/45 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60"
              >
                <IoArrowUp className="text-2xl text-black/85" />
                <p className="text-sm mt-2.5 text-black/85 font-light ">Send</p>
              </div>
              <div
                onClick={() => setIsReceive(true)}
                className="text-3xl  bg-white/45 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60"
              >
                <IoArrowDown className="text-2xl text-black/85" />
                <p className="text-sm mt-2.5 text-black/85 font-light ">
                  Receive
                </p>
              </div>
              <div className="text-xl  bg-white/45 flex flex-col items-center justify-center rounded-3xl h-20 w-20 ml-auto mr-auto  text-white/60">
                <IoScan className="text-2xl text-black/85" />
                <p className="text-sm mt-2.5 text-black/85 font-light ">Scan</p>
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
            <div className="bg-white/55 w-[90%] flex items-center justify-center rounded-3xl h-[100px]">
              <div className="bg-gothic-600/85 w-12 flex items-center justify-center h-12 ml-[23px] mr-[10px] rounded-full">
                <img
                  src="./assets/chain1.svg"
                  className="text-white/90 w-full h-full text-2xl"
                />
              </div>
              <div className="ml-[5px] text-black/85 mr-auto px-3">
                <p className="text-sm mb-1.5">Ethereum</p>
                <p className="text-sm">{`$${ethPrice}`}</p>
              </div>
              <div className="ml-[10px]  text-black/85 mr-4 px-3">
                <p className="text-[23] mb-1.5">
                  {ethBalance.toString().slice(0, 4)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="mt-auto mb-auto">
        <Menu />
      </div>

      {isSend && <SendModal />}
      {welcome && <Welcome />}
      {isReceive && <ReceiveModal />}
    </div>
  );
};
