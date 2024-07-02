import { Checkbox } from "@/components/ui/checkbox";
import { Employee } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "order_number",
    header: "ORDER NO.",
  },
  {
    accessorKey: "code",
    header: "TRACKING",
  },
  {
    accessorKey: "tracking_number",
    header: "LAST MILE TRACKING",
  },
  {
    accessorKey: "service_name",
    header: "SERVICE",
  },
  {
    accessorKey: "created_at",
    header: "CREATED DATE",
  },
  {
    accessorKey: "accepted_at",
    header: "ACCEPTED DATE",
  },
  {
    accessorKey: "status_string",
    header: "STATUS",
  },
  {
    accessorKey: "shipping_fee",
    header: "TOTAL FEE",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
