import { ApiEndpointList } from "@/constants/api-endpoint.constant";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCafes = () => {
  const { data: cafes, isLoading, error } = useQuery({
    queryKey: ["cafes"],
    queryFn: async () => {
        const response = await fetch(ApiEndpointList.cafe.GET_CAFES);
        if (!response.ok) {
            toast.error('Failed to fetch cafes')
        }
        return response.json();
    },
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  return { cafes, isLoading, error };
};
