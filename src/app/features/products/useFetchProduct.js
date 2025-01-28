import { axiosinstance } from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = ({ onSuccess } = {}) => {
  return useQuery({
    queryFn: async () => {
      const productResponses = await axiosinstance.get("/products");
      return productResponses;
    },
    queryKey: ["fetch.products"],
    onSuccess, // Callback jika diperlukan
  });
};
