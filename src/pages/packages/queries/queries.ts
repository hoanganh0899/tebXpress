import { getListPackages } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useGetListPackages = (
  offset: number,
  pageLimit: number,
  code: string | null
) => {
  return useQuery({
    queryKey: ["students", offset, pageLimit, code],
    queryFn: async () => getListPackages(offset, pageLimit, code),
  });
};
