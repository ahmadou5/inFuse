import { GlobalContext } from "@/Context/AppContext"
import { Supabase } from "@/Utils/supabasedb"
import { useEffect } from "react"

export const useGetUserId = () => {
    const {setIsAuthenticate, user} = GlobalContext()
    useEffect(() => {
         if(user) {
            const check = async () => {
                const { data, error} = await Supabase
                .from('Wallets')
                .select()
                .eq('id',user?.initDataUnsafe?.user?.id)
               

                if(error) {
                    console.log(error)
                } 
                if(data?.id) {
                    setIsAuthenticate(true)
                }
            }
            check()
         }
    },[])
    return true
}