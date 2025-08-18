import { useQuery } from "@tanstack/react-query"
import { getLiveVideos } from "../sevices/live_videoServices"


export const useGetLiveVideo =(query:any)=>{
    return useQuery({
        queryKey:["live", query],
        queryFn:async()=>await getLiveVideos(query),
    },
    

)
    
}