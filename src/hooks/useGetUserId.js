import { GlobalContext } from "@/Context/AppContext"
import { Supabase } from "@/Utils/supabasedb"
import { useEffect } from "react"
import axios from "axios";
export const useGetUserId = () => {
    const Url = 'https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    const {setIsAuthenticate, isAuthenticate, userPkey,setUserPkey, ethPrice,
      setEthPrice, userName, setUserName, setUserAddress, isLoading,setIsLoading, setWelcome,  user} = GlobalContext()
    useEffect(() => {
      const getPrice = async () => {
        const response = await axios.get(Url);
        setEthPrice(response.data?.attributes.token_price)
        console.log('response',response)
    }
    getPrice()
        const fetchUser = async () => {
            try {
              const {data ,error} = await Supabase
                .from('Wallets')
                .select('*')
                .eq('id',user?.initDataUnsafe?.user?.id)
                .single()
               if(error) {
               
                const timeoutId = setTimeout(() => {
                  setIsLoading(false) 
                  //setWelcome(true)
                }, 15000); // 5 seconds in milliseconds
                setIsAuthenticate(false)
                return () => clearTimeout(timeoutId); 
               }
               if(data) {
                console.log(data,'data222')
                //setIsAuthenticate(true)
                setUserAddress(data?.address)
                setUserName(data?.username)
                setUserPkey(data?.privateKey)
                const timeoutId = setTimeout(() => {
                  setIsLoading(false) 
                  setWelcome(true)
                }, 10000); // 5 seconds in milliseconds
                setIsAuthenticate(true)
                return () => clearTimeout(timeoutId); 
               }
             } catch (error) {
                console.log(error)
             }
        }
        fetchUser()
    },[user])
    return true
}