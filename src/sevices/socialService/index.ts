'use server'
import axiosInstance from "@/src/lib/axiosInstance"
import { ApiError } from "next/dist/server/api-utils";

 export const getAllSocalMedia =async()=>{
    try {
        const {data} = await axiosInstance.get('/api/social-links');
    return data
    } catch (error) {
        throw new ApiError(404,`somthing went worng ${error}`)
    }
}