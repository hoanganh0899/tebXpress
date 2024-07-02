import DataTable from "@/components/shared/data-table";
import { columns } from "./columns";
import StudentTableActions from "./package-table-action";
import PackageTabs from "./package-status-tab";

type TStudentsTableProps = {
  users: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function OrdersTable({ users, pageCount }: TStudentsTableProps) {
  return (
    <>
      <StudentTableActions />
      <PackageTabs />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
