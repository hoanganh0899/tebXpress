import { Button } from "@/components/ui/button";
import { CircleAlert, Search, Ticket } from "lucide-react";
import { DialogCloseButton } from "../component/ModalDetailCoupon";

const ListCoupon: React.FC = () => {
  return (
    <>
      <div className="bg-[#f6f7f7] relative">
        <Search className="absolute top-[1.9rem] left-[0.6rem] mx-5 pl-2" />
        <input
          type="search"
          placeholder="Search coupon code"
          className="my-5 border border-gray-300 p-2 rounded w-screen mx-7 px-8"
        />
      </div>
      <div className="grid grid-cols-2 bg-[#f6f7f7]">
        <div className="flex bg-[url('http://localhost:6969/img/coupon_bg_image.4df680cb.png')] h-[168px] rounded-[8px] bg-cover items-center gap-5 justify-between m-5">
          <div className="icon w-40 pl-[66px]">
            <Ticket className="w-10 h-10" />
          </div>
          <div className="txt w-[calc(100% - 360px)]">
            <h2 className="font-[700] text-[20px] leading-[28px] text-[#111212] my-2">
              Giảm ngay $12.00
            </h2>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              Giá trị áp dụng tối thiểu: $10.00
            </p>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              HSD: 07/11/2023
            </p>
          </div>
          <div className="action text-right mr-6">
            <Button>Buy</Button>
            <DialogCloseButton />
          </div>
        </div>
        <div className="flex bg-[url('http://localhost:6969/img/coupon_bg_image.4df680cb.png')] h-[168px] rounded-[8px] bg-cover items-center gap-5 justify-between m-5">
          <div className="icon w-40 pl-[66px]">
            <Ticket className="w-10 h-10" />
          </div>
          <div className="txt w-[calc(100% - 360px)]">
            <h2 className="font-[700] text-[20px] leading-[28px] text-[#111212] my-2">
              Giảm ngay $12.00
            </h2>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              Giá trị áp dụng tối thiểu: $10.00
            </p>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              HSD: 07/11/2023
            </p>
          </div>
          <div className="action text-right mr-6">
            <Button>Buy</Button>
            <div className="flex cursor-pointer">
              <CircleAlert /> tim hieu them
            </div>
          </div>
        </div>
        <div className="flex bg-[url('http://localhost:6969/img/coupon_bg_image.4df680cb.png')] h-[168px] rounded-[8px] bg-cover items-center gap-5 justify-between m-5">
          <div className="icon w-40 pl-[66px]">
            <Ticket className="w-10 h-10" />
          </div>
          <div className="txt w-[calc(100% - 360px)]">
            <h2 className="font-[700] text-[20px] leading-[28px] text-[#111212] my-2">
              Giảm ngay $12.00
            </h2>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              Giá trị áp dụng tối thiểu: $10.00
            </p>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              HSD: 07/11/2023
            </p>
          </div>
          <div className="action text-right mr-6">
            <Button>Buy</Button>
            <div className="flex cursor-pointer">
              <CircleAlert /> tim hieu them
            </div>
          </div>
        </div>
        <div className="flex bg-[url('http://localhost:6969/img/coupon_bg_image.4df680cb.png')] h-[168px] rounded-[8px] bg-cover items-center gap-5 justify-between m-5">
          <div className="icon w-40 pl-[66px]">
            <Ticket className="w-10 h-10" />
          </div>
          <div className="txt w-[calc(100% - 360px)]">
            <h2 className="font-[700] text-[20px] leading-[28px] text-[#111212] my-2">
              Giảm ngay $12.00
            </h2>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              Giá trị áp dụng tối thiểu: $10.00
            </p>
            <p className="text-[14px] font-normal leading-[20px] mb-0 text-[#313232]">
              HSD: 07/11/2023
            </p>
          </div>
          <div className="action text-right mr-6">
            <Button>Buy</Button>
            <div className="flex cursor-pointer">
              <CircleAlert /> tim hieu them
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCoupon;
