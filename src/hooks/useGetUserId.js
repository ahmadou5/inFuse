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
                .select('id')
                .eq('id',user?.initDataUnsafe?.user?.id)
                .single()

                if(error) {
                    console.log(error)
                } else if(data?.id === user?.initDataUnsafe?.user?.id) {
                    setIsAuthenticate(true)
                }
            }
            check()
         }
    },[])
    return true
}