import DataTable from "@/components/shared/data-table";
import { columns } from "./columns";
import StudentTableActions from "./package-table-action";
import PackageTabs from "./package-status-tab";

type TStudentsTableProps = {
  packages: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function OrdersTable({
  packages,
  pageCount,
}: TStudentsTableProps) {
  return (
    <>
      <StudentTableActions />
      <PackageTabs />
      {packages && (
        <DataTable columns={columns} data={packages} pageCount={pageCount} />
      )}
    </>
  );
}
