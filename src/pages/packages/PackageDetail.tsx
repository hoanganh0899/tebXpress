import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function PackageDetail() {
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
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Phone:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Address:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">City:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">State Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Zip Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Country Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Order Details:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Full Name:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Phone:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Address:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">City:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">State Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Zip Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Country Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Help & Claims:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Full Name:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Phone:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Address:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">City:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">State Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Zip Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Country Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="border-b pb-3">Product Detail:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Full Name:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Phone:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Address:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">City:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">State Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Zip Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-4">Country Code:</div>
                <div className="col-span-8"> nha</div>
              </div>
            </CardContent>
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
