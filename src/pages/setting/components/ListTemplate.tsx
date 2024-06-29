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
import { Plus } from "lucide-react";
import React, { useState } from "react";
import ImportTemplateForm from "../component/ModalCreateImportTemplate";

const ListTemplate: React.FC = () => {
  const handleModal = (value: any) => {
    // Add modal handling logic here
    console.log("Modal opened with value:", value);
  };

  return (
    <div className="page-header flex justify-between px-6 pt-0 pb-[18px] mt-5">
      <div className="w-full">
        <h1 className="font-bold text-2xl text-[#17191d]">List templates</h1>
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
              <Plus /> Import Template
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="border-b pb-4 border-slate-500">
                Add product
              </DialogTitle>
            </DialogHeader>
            <ImportTemplateForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ListTemplate;
