import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBillDetails, getBillPackages, getExtraFee } from "@/services/bill";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type BillDetail = {
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  shipping_fee: number;
  extra_fee: number;
  status: number;
  user_id: number;
  package: any | null;
};

type ExtraFee = {
  id: number;
  type_name: string;
  package_id: number;
  shipment_id: number;
  package_code: string;
  bill_id: number;
  amount: number;
  description: string;
  status: number;
  updated_at: string;
  created_at: string;
};

type BillPackage = {
  id: number;
  code: string;
  tracking_number: string;
  shipping_fee: number;
  status: number;
  update_at: string;
  created_at: string;
};

const BillDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [billDetail, setBillDetail] = useState<BillDetail | null>(null);
  const [billPackage, setBillPackage] = useState<BillPackage[] | null>([]);
  const [extraFee, setExtraFee] = useState<ExtraFee[] | null>([]);
  console.log("code:", code);
  useEffect(() => {
    const fetchBillDetail = async () => {
      try {
        if (code) {
          const data = await getBillDetails(code);
          setBillDetail(data.bill);
        }
      } catch (error) {}
    };

    const fetchBillPackage = async () => {
      try {
        if (code) {
          const data = await getBillPackages(code);
          setBillPackage(data.packages);
        }
      } catch (error) {}
    };

    const fetchExtraFee = async () => {
      try {
        if (code) {
          const data = await getExtraFee(code);
          setExtraFee(data.fees);
        }
      } catch (error) {}
    };

    fetchBillDetail();
    fetchBillPackage();
    fetchExtraFee();
  }, [code]);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 bg-[#ddf3f4] p-4 rounded-lg mx-40 mt-10">
        <div>
          <div className="text-[#626363]">Bill code:</div>
          <span className="text-[#007e78]">{code}</span>
        </div>
        <div>
          <div className="text-[#626363]">Created at:</div>
          <span className="text-[#007e78]">{billDetail?.created_at}</span>
        </div>
        <div>
          <div className="text-[#626363]">Total bill:</div>
          <span className="text-[#007e78] font-semibold text-2xl">
            ${billDetail ? billDetail.shipping_fee + billDetail.extra_fee : 0}
          </span>
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
          {billPackage!.length > 0 ? (
            billPackage?.map((item) => (
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-[#006a5e] flex gap-2">
                    {item.code} <ArrowUpRight className="w-4 h-4" />
                  </TableCell>
                  <TableCell>{item.created_at}</TableCell>
                  <TableCell>{item.tracking_number}</TableCell>
                  <TableCell className="text-right">
                    +${item.shipping_fee}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          ) : (
            <p className="mx-auto">No results</p>
          )}
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
              <TableHead className="">FBA code</TableHead>
              <TableHead className="w-[200px]">Time</TableHead>
              <TableHead className="w-[200px]">Type fee</TableHead>
              <TableHead className="">Description</TableHead>
              <TableHead className="text-right">Fee extra</TableHead>
            </TableRow>
          </TableHeader>
          {extraFee!.length > 0 ? (
            extraFee?.map((item) => (
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-[#006a5e] flex gap-2">
                    {item.package_code}
                    <ArrowUpRight className="w-4 h-4" />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>{item.created_at}</TableCell>
                  <TableCell>{item.type_name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">+${item.amount}</TableCell>
                </TableRow>
              </TableBody>
            ))
          ) : (
            <p>No results</p>
          )}
        </Table>
      </div>
    </>
  );
};

export default BillDetail;
