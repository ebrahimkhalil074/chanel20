import { useQuery } from "@tanstack/react-query"
import { getAllArcicales, } from "../sevices/articaleService"

export const useGetAllArticale =(query:any)=>{
    return useQuery({
        queryKey:["Articale", query],
        queryFn:async()=>await getAllArcicales(query),
    },
    

)
    
}