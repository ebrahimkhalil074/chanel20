import { useQuery } from "@tanstack/react-query"
import { getAllArcicales, getArticle, getSearchArcicales } from "../sevices/articaleService"

export const useGetAllArticale =(query:any)=>{
    return useQuery({
        queryKey:["Articale", query],
        queryFn:async()=>await getAllArcicales(query),
    },
    

)
    
}
export const useGetSearchArticale =(query:any)=>{
    return useQuery({
        queryKey:["search-articale", query],
        queryFn:async()=>await getSearchArcicales(query),
    },
)   
}
export const useGetArticle =(id:string)=>{
    return useQuery({
        queryKey:["single-Article",id],
        queryFn:async()=>await getArticle(id),
    },
    

)
}