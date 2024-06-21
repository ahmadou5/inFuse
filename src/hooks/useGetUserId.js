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
                    setIsAuthenticate(false)
                }
                if(data) {
                    console.log(data)
                    setIsAuthenticate(true)
                }
            }
            check()
         }
    },[user])
    return true
}