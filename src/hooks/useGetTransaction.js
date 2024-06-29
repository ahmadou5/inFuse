"use client";
import { useEffect, useState } from "react";
import { ethers,formatUnits,parseUnits } from "ethers";
import { Supabase } from "@/Utils/supabasedb";
import { GlobalContext } from "@/Context/AppContext";
export const useGetTransaction = () => {
  const {
    setIsSend,
    userPkey,
    ethPrice,
    ethBalance,
    userAddress,
    isTxFail,
    setIsTxFail,
    isTxSuccess,
    setIsTxSuccess,
    user,
  } = GlobalContext();
  const Provider = new ethers.JsonRpcProvider(
    "https://ethereum-sepolia-rpc.publicnode.com"
  );
  const [trx, setTrx] = useState(true);
  const id = user?.initDataUnsafe?.user?.id
  useEffect(() => {
    const listener = async () => {
      const blockN = await Provider.getBlockNumber();
      const block = await Provider.getBlock(blockN);

      const userTransactions = block.transactions;
      const CheckuserTransactions = await Promise.all(
        userTransactions.map(async (hash) => {
          try {
            const transaction = await Provider.getTransaction(hash);
            //console.log('trxxxx',transaction)
            if (transaction.to === userAddress) {
              const { data, error } = await Supabase.from("History")
                .insert([
                  {
                    id: id,
                    sender: transaction.to,
                    receiver:transaction.from,
                    amount: formatUnits(transaction.value,'ether'),
                    hash: transaction.hash,
                    isSend:false
                  },
                ])
                .select();
              if (data) {
                 console.log('pass')
              }
              if (error) {
                console.log(error);
              }
             
              return transaction;
            }
            console.log("block", blockN);
            // const UserTx = transaction.to
            // console.log('USERs:',UserTx)
          } catch (error) {
            console.error("Error fetching transaction info:", error);
            return null; // Handle errors gracefully
          }
        })
      );
      CheckuserTransactions();

      console.log("block", blockN);
      console.log("User", userTransactions.toJSON());
    };
    Provider.on("block", listener);
    const startBlock = () => {};
  }, []);
  return trx;
};
