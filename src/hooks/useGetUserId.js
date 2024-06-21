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
                .eq('id',user?.initDataUnsafe?.user?.id)
                .select()

                if(error) {
                    console.log(error)
                    setIsAuthenticate(false)
                }
                if(data && data[0].id === user?.initDataUnsafe?.user?.id ) {
                    setIsAuthenticate(true)
                }
            }
            check()
         }
    },[user])
    return true
}