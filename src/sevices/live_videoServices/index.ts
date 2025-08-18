'use server'

import axiosInstance from "@/src/lib/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";

export const getLiveVideos =async(query:any)=>{
    try {
        const {data} =await axiosInstance.get(`/api/live_video/last`,{
         params: query ? { category: query } : {},      
        });
        return data
    } catch (error) {
        throw new ApiError(500,`error, ${error}`)
    } 
}