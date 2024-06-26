import DataTable from "@/components/shared/data-table";
import { columns } from "./columns";
import StudentTableActions from "./package-table-action";

type TStudentsTableProps = {
  users: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function StudentFeedTable({
  users,
  pageCount,
}: TStudentsTableProps) {
  return (
    <>
      <StudentTableActions />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
