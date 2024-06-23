import axios from "axios";
import { useEffect } from "react";

export const useGetEthPrice = () => {
    const Url = 'https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    
    useEffect(() => {
        const getPrice = async () => {
            const response = await axios.get(Url);
            console.log('response',response)
        }
        getPrice()
    },[])
}