import { getListPackages } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetListPackages = (
  offset: number,
  pageLimit: number,
  order_number: string | null
) => {
  return useQuery({
    queryKey: ["students", offset, pageLimit, order_number],
    queryFn: async () => getListPackages(offset, pageLimit, order_number),
  });
};
