import { GlobalContext } from "@/Context/AppContext"
import { Supabase } from "@/Utils/supabasedb"
import { useEffect } from "react"

export const useGetUserId = () => {
    const {setIsAuthenticate, isAuthenticate, setUserAddress, user} = GlobalContext()
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const {data ,error} = await Supabase
                .from('Wallets')
                .select('*')
                .eq('id',user?.initDataUnsafe?.user?.id)
                .single()
               if(error) throw error
               if(data) {
                alert('data',data)
                console.log(data,'data222')
                setIsAuthenticate(true)
                //setUserAddress(data)
               }
             } catch (error) {
                console.log(error)
             }
        }
        fetchUser()
    },[user])
    return true
}