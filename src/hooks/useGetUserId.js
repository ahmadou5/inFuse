import { GlobalContext } from "@/Context/AppContext";
import { Supabase } from "@/Utils/supabasedb";
import { useEffect } from "react";
import { formatEther ,ethers} from "ethers";
import axios from "axios";
export const useGetUserId = () => {
  const baseUrl = "https://explorer.fuse.io/api/v2/stats";
  
  const {
    setIsAuthenticate,
    isAuthenticate,
    userPkey,
    setUserPkey,
    ethPrice,
    setEthPrice,
    setEthBalance,
    userAddress,
    userName,
    tokens,
    
    history, 
    providerURL,
    setHistory,
    setTokens,
    userMnemonic,setUserMnemonic,
    setUserName,
    setUserAddress,
    isLoading,
    setIsLoading,
    setWelcome,
    user,
  } = GlobalContext();
  const Provider =  new ethers.JsonRpcProvider(
    providerURL
  );
  useEffect(() => {
    const getEthPrice = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}`
        );
        const price = response.data.coin_price;
        setEthPrice(price);
        console.log("Current ETH/USD price:", price);
        return price;
      } catch (error) {
        console.error("Error fetching ETH/USD price:", error);
        return null; // Handle errors gracefully
      }
    };
    getEthPrice();
    const getUserTransaction = async () => {
      const { data, error } = await Supabase.from("NewHistory")
        .select("*")
        .eq("id", user?.initDataUnsafe?.user?.id);

      if (data) {
        console.log(data, "userData");
        console.log(providerURL,'URL')
        setHistory(data);
      }
      if (error) {
        console.log(error);
       // alert(error);
      }
    };
    getUserTransaction();
    
    const fetchUser = async () => {
      try {
        const { data, error } = await Supabase.from("Wallets")
          .select("*")
          .eq("id", user?.initDataUnsafe?.user?.id)
          .single();
        if (error) {
          const timeoutId = setTimeout(() => {
            setIsLoading(false);
            //setWelcome(true)
          }, 9000); // 5 seconds in milliseconds
          setIsAuthenticate(false);
          return () => clearTimeout(timeoutId);
        }
        if (data) {
          //console.log(data, "data222");
          //setIsAuthenticate(true)
          setUserAddress(data?.address);
          setUserName(data?.username);
          setUserPkey(data?.privateKey);
          setUserMnemonic(data?.phrase)
          const timeoutId = setTimeout(() => {
            setIsLoading(false);
            setWelcome(true);
          }, 9000); // 5 seconds in milliseconds
          setIsAuthenticate(true);
          return () => clearTimeout(timeoutId);
        }
      } catch (error) {
        console.log(error);
      }
     
    };
    fetchUser();
  }, [user]);
  return true;
};
