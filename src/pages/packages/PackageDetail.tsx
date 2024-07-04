import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPackagesDetail } from "@/services/packages";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type PackageDetail = {
  id: number;
  order_number: string;
  label: string;
  recipient: string;
  company: string;
  phone_number: string;
  address_1: string;
  address_2: string;
  city: string;
  state_code: string;
  zipcode: string;
  country_code: string;
  detail: string;
  weight: number;
  width: number;
  length: number;
  height: number;
  actual_weight: number;
  actual_width: number;
  actual_length: number;
  actual_height: number;
  status_string: string;
  service_id: number;
  note: string;
  service_name: string;
  service_code: string;
  tracking_number: string;
  code_package: string;
  shipping_fee: number;
  created_at: string;
  alert: number;
  is_insured: boolean;
  estimate_date_process: string;
  is_package_exceed: boolean;
  include_battery: boolean;
  package_products: any[];
};

export default function PackageDetail() {
  const { package_id } = useParams<{ package_id: string }>();
  // console.log("code:", package_id);
  const [packageDetail, setPackageDetail] = useState<PackageDetail | null>(
    null
  );

  useEffect(() => {
    const fetchPackageDetail = async () => {
      try {
        if (package_id) {
          const data = await getPackagesDetail(package_id);
          setPackageDetail(data.package);
        }
      } catch (error) {}
    };

    fetchPackageDetail();
  }, [package_id]);

  return (
    <div className="bg-[#f4f4f4] h-full relative">
      <div className="mb-5 bg-[#fff] p-6">gdghfd</div>

      <div className="px-5 grid grid-cols-3 gap-5">
        <div className="grid grid-cols-2 gap-5 col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Recipient:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Full Name:</div>
                <div className="col-span-8"> {packageDetail?.recipient}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Phone:</div>
                <div className="col-span-8"> {packageDetail?.phone_number}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Address:</div>
                <div className="col-span-8"> {packageDetail?.address_1}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">City:</div>
                <div className="col-span-8"> {packageDetail?.city}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">State Code:</div>
                <div className="col-span-8"> {packageDetail?.state_code}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Zip Code:</div>
                <div className="col-span-8"> {packageDetail?.zipcode}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Country Code:</div>
                <div className="col-span-8"> {packageDetail?.country_code}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Order Details:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Detail:</div>
                <div className="col-span-8"> {packageDetail?.detail}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Order number:</div>
                <div className="col-span-8"> {packageDetail?.order_number}</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Weight:</div>
                <div className="col-span-8"> {packageDetail?.weight} gram</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Length:</div>
                <div className="col-span-8"> {packageDetail?.length} cm</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Width:</div>
                <div className="col-span-8"> {packageDetail?.width} cm</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Height:</div>
                <div className="col-span-8"> {packageDetail?.height} cm</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Battery:</div>
                <div className="col-span-8">
                  {packageDetail?.include_battery ? "Yes" : "No"}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Help & Claims:</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">
                Product Information:
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="border-b pb-3">Order history</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-[#fff] p-6 absolute bottom-0 w-full">
        <div className="total float-right">
          <div className="total-title text-xs font-medium text-[#aaabab]">
            Cước tạm tính:
          </div>
          <span className="total-number text-[28px] font-semibold leading-[34px] text-[#111212]">
            $0.00
          </span>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="total-title text-xs font-medium text-[#aaabab]">
              Delivery fee:
            </div>
            <span className="total-number text-lg font-medium leading-[34px] text-[#111212] tracking-[.2px]">
              $0.00
            </span>
          </div>
          <div>
            <div className="total-title text-xs font-medium text-[#aaabab]">
              Additional charges:
            </div>
            <span className="total-number text-lg font-medium leading-[34px] text-[#111212] tracking-[.2px]">
              $0.00
            </span>
          </div>
          <div>
            <div className="total-title text-xs font-medium text-[#aaabab]">
              Discounts:
            </div>
            <span className="total-number text-lg font-medium leading-[34px] text-[#111212] tracking-[.2px]">
              $0.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
