import { useQuery } from "@tanstack/react-query"
import { getAllSocalMedia } from "../sevices/socialService"

export const useGetAllSocialMedia =()=>{
return useQuery({
    queryKey:['socialMedia'],
    queryFn:async ()=>await getAllSocalMedia()
})
}