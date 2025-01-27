import {axiosinstance} from "../lib/axios";
import {useMutation} from "@tanstack/react-query";

export const useCreateProduct = ({onSuccess})=>{
    return useMutation({
        mutationFn : async(body)=>{
            const productResponses = await axiosinstance.post("/products");

            return productResponses;
        }
    })
}