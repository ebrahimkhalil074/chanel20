'use server'

import axiosInstance from "@/src/lib/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";

export const getAllVideos =async(query:any)=>{
    try {
        const {data} =await axiosInstance.get(`/api/videos`,{
         params: query ? { category: query } : {},      
        });
        return data
    } catch (error) {
        throw new ApiError(500,`error, ${error}`)
    } 
}
export const getArticle =async(id:string)=>{
    try {
        const {data} =await axiosInstance.get(`/api/articles/${id}`);
        return data
    } catch (error) {
        throw new ApiError(500,`error ${error}`,)
    }
}