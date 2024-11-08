import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllMenus = () => {
    const instance = useAxios()
    const { data: allMenuData = [] } = useQuery({
        queryKey: ["allMenuData"],
        queryFn: async () => {
            const res = await instance.get("/api/v1/products")
            return res.data
        }
    })
    return [allMenuData]
};

export default useAllMenus;