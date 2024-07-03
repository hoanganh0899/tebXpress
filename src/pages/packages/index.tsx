import PageHead from "@/components/shared/page-head";
import { useGetListPackages } from "./queries/queries";
import OrdersTable from "./components/packages-table";
import { useSearchParams } from "react-router-dom";
import { DataTableSkeleton } from "@/components/shared/data-table-skeleton";

export default function StudentPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const pageLimit = Number(searchParams.get("limit") || 10);
  const code = searchParams.get("search") || null;
  const offset = (page - 1) * pageLimit;
  const { data, isLoading } = useGetListPackages(offset, pageLimit, code);
  const packages = data?.packages;
  console.log("data:", packages);
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  if (isLoading) {
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={10}
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );
  }

  return (
    <div className="p-5">
      <PageHead title="Orders | TebXpress" />
      <OrdersTable
        packages={packages}
        page={page}
        totalUsers={totalUsers}
        pageCount={pageCount}
      />
    </div>
  );
}
