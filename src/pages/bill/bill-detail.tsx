import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BillDetail: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 bg-[#ddf3f4] p-4 rounded-lg mx-40 mt-10">
        <div>
          <div className="text-[#626363]">Bill code:</div>
          <span className="text-[#007e78]">2374220240702</span>
        </div>
        <div>
          <div className="text-[#626363]">Created at:</div>
          <span className="text-[#007e78]">02/07/2024 11:36:27</span>
        </div>
        <div>
          <div className="text-[#626363]">Total bill:</div>
          <span className="text-[#007e78] font-semibold text-2xl">$52.60</span>
        </div>
      </div>

      <div className="mx-40 mt-10 border shadow-sm p-4 rounded-md">
        <div className="font-medium text-lg tracking-[.2px] text-[#111212]">
          Fee create
        </div>
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Tracking</TableHead>
              <TableHead className="w-[250px]">Time</TableHead>
              <TableHead className="w-[200px]">Last mile tracking</TableHead>
              <TableHead className="text-right">Fee create</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mx-40 mt-10 border shadow-sm p-4 rounded-md">
        <div className="font-medium text-lg tracking-[.2px] text-[#111212]">
          Fee extra
        </div>
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Tracking</TableHead>
              <TableHead className="w-[250px]">Time</TableHead>
              <TableHead className="w-[200px]">Last mile tracking</TableHead>
              <TableHead className="text-right">Fee create</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default BillDetail;
