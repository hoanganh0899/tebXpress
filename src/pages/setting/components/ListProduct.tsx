import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModalAddClaim from "../component/ModalProduct";

const ListProduct: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    // Add search handling logic here
    console.log("Searching for:", searchValue);
  };

  const handleModal = (value: any) => {
    // Add modal handling logic here
    console.log("Modal opened with value:", value);
  };

  return (
    <div className="page-header flex justify-between px-6 pt-0 pb-[18px] mt-5">
      <div className="w-full relative">
        <Search className="absolute top-[0.5rem] mx-2 pl-2" />
        <input
          type="search"
          placeholder="Search by product name or SKU"
          className="mb-2 border border-gray-300 p-2 rounded w-full ml-2 px-6"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div className="w-1/2 flex justify-end">
        {/* <button
          type="button"
          className="btn btn-primary flex items-center bg-blue-500 text-white p-2 rounded-xl px-4"
          onClick={() => handleModal(null)}
        >
          <Plus /> Add Product
        </button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="btn btn-primary flex items-center bg-blue-500 text-white p-2 rounded-xl px-4"
              onClick={() => handleModal(null)}
            >
              <Plus /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="border-b pb-4 border-slate-500">
                Add product
              </DialogTitle>
            </DialogHeader>
            <ModalAddClaim
              visible={true} // Make sure to handle visibility within the ModalAddClaim component
              title="Edit Profile"
              handleClose={() => handleModal(false)}
              handleSave={(product) => {
                handleModal(false);
              }}
              countries={["Country1", "Country2"]}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ListProduct;
