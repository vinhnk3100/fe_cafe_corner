import { ApiEndpointList } from "@/constants/api-endpoint.constant";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Cafe } from "@/schemas/cafe.schema";

export const useCafes = () => {
  const QueryKeys = {
    alt: ["cafes"],
    list: () => ["cafes"],
    item: (id: string) => ["cafes", id],
  };
  const queryClient = useQueryClient();

  const {
    data: cafes,
    isLoading,
    error,
  } = useQuery({
    queryKey: QueryKeys.list(),
    queryFn: async () => {
      const response = await fetch(ApiEndpointList.cafe.GET_CAFES);
      if (!response.ok) {
        toast.error("Failed to fetch cafes");
      }
      return response.json();
    },
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  const createCafe = useMutation({
    mutationFn: async (cafe: Omit<Cafe, "id">) => {
      const response = await fetch(ApiEndpointList.cafe.CREATE_CAFE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cafe),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to add cafe");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.list() });
      toast.success("Cafe created successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create cafe");
    },
  });

  const updateCafe = useMutation({
    mutationFn: async (cafe: Cafe) => {
      const response = await fetch(ApiEndpointList.cafe.UPDATE_CAFE(cafe.id!), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cafe),
      });
      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || "Failed to update cafe");
      }

      return response.json();
    },
    onSuccess: (updatedCafe) => {
      queryClient.setQueryData(QueryKeys.list(), (old: Cafe[]) => {
        if (!old) return [updatedCafe];
        return old.map((cafe) =>
          cafe.id === updatedCafe.id ? updatedCafe : cafe
        );
      });
      toast.success("Cafe updated successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update cafe");
    },
  });

  const deleteCafe = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(ApiEndpointList.cafe.DELETE_CAFE(id));
      if (!response.ok) {
        toast.error("Failed to delete cafe");
      }

      return response.json();
    },
    onSuccess: (deletedCafe) => {
      queryClient.setQueryData(QueryKeys.list(), (old: Cafe[]) => {
        if (!old) return [];
        return old.filter((cafe) => cafe.id !== deletedCafe.id);
      });
      toast.success("Cafe deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete cafe");
    },
  });

  return { cafes, isLoading, error, createCafe, updateCafe, deleteCafe };
};
