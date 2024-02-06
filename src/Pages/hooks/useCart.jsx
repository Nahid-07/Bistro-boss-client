import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const useCart = ()=>{
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('Access Token')
    const {data : cartItems=[], refetch,isLoading} = useQuery({
        queryKey:['cart', user?.email ],
        queryFn : async ()=>{
            const res = await fetch(`https://bistro-boss-server-lilac-iota.vercel.app/cart?email=${user?.email}`)
            return res.json();
        }
    })
    return [cartItems,refetch,isLoading]
}
export default useCart