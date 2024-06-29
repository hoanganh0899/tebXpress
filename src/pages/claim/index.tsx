import { Search } from "lucide-react";
import React from "react";
import ModalAddClaim from "./components/ModalAddClaim";
import { Input } from "@/components/ui/input";

const ListClaim: React.FC = () => {
  return (
    <>
      <div className="page-header flex justify-between px-6 pt-0 pb-[18px] mt-5">
        <div className="w-full">
          <h1 className="font-bold text-2xl text-[#17191d]">List claims</h1>
        </div>
        <div className="w-1/2 flex justify-end">
          <ModalAddClaim />
        </div>
      </div>
      <div className="px-6 relative">
        <Search className="absolute top-[0.8rem] mx-2 pl-2" />
        <Input
          type="search"
          placeholder="Search by tracking code"
          className="px-6 ml-2 h-[50px]"
        />
      </div>
    </>
  );
};

export default ListClaim;
