
import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';


const useGetAllNews = () => {
    const instance = useAxios()
    const { data: allNewsData = [] ,  refetch, isLoading} = useQuery({
        queryKey: ["allNewsData"],
        queryFn: async () => {
            const res = await instance.get("/api/v1/news")
            return res.data
        }
    })
    return [allNewsData,  refetch, isLoading]
};

export default useGetAllNews;

