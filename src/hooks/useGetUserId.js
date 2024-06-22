import { GlobalContext } from "@/Context/AppContext"
import { Supabase } from "@/Utils/supabasedb"
import { useEffect } from "react"

export const useGetUserId = () => {
    const {setIsAuthenticate, isAuthenticate, setUserAddress, isLoading,setIsLoading, setWelcome,  user} = GlobalContext()
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const {data ,error} = await Supabase
                .from('Wallets')
                .select('*')
                .eq('id',user?.initDataUnsafe?.user?.id)
                .single()
               if(error) {
                setIsAuthenticate(false)
                const timeoutId = setTimeout(() => {
                  setIsLoading(false) 
                  //setWelcome(true)
                }, 15000); // 5 seconds in milliseconds
                return () => clearTimeout(timeoutId); 
               }
               if(data) {
                console.log(data,'data222')
                setIsAuthenticate(true)
                setUserAddress(data?.address)
                const timeoutId = setTimeout(() => {
                  setIsLoading(false) 
                  setWelcome(true)
                }, 15000); // 5 seconds in milliseconds
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