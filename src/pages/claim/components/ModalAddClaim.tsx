import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircleAlert, ImageUp, LucideIcon, Plus, Ticket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const schema = z.object({
  tracking: z.string().min(1, { message: "Tracking name is required" }),
  file: z.any(),
  title: z.string().min(1, { message: "Title is required" }),
});

type FormData = z.infer<typeof schema>;

const ModalAddClaim: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleModal = (value: any) => {
    // Add modal handling logic here
    console.log("Modal opened with value:", value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="btn btn-primary flex items-center bg-blue-500 text-white p-2 rounded-xl px-4"
          onClick={() => handleModal(null)}
        >
          <Plus /> Add claim
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        {/* <DialogHeader>
          <div className="flex">
            <div>
              <Ticket className="w-10 h-10" />
            </div>
            <div className="header_title">
              <h2 className="font-[700] text-[20px] leading-[28px] text-[#111212] my-2">
                Giảm ngay $12.00
              </h2>
              <span className="text-[12px] font-normal leading-[16px] mb-0 text-[#313232]">
                Coupon giảm giá ($)
              </span>
            </div>
          </div>
        </DialogHeader> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded"
        >
          <h2 className="text-xl font-bold mb-4 border-b pb-5">
            Tạo một Import Template
          </h2>

          <label className="block mb-2">
            Tracking:
            <span className="text-red-600 ml-1">*</span>
            <input
              {...register("tracking")}
              className="block w-full p-2 border rounded mt-1"
              placeholder="Write your tracking here..."
            />
            {errors.tracking && (
              <span className="text-red-500">{errors.tracking.message}</span>
            )}
          </label>

          <label className="block mb-2">
            Reason:
            <span className="text-red-600 ml-1">*</span>
            <select
              {...register("file")}
              className="block w-full p-2 border rounded mt-1"
            >
              <option value="">Select a reason</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
              <option value="template3">Template 3</option>
            </select>
          </label>

          <label className="block mb-2">
            Title:
            <span className="text-red-600 ml-1">*</span>
            <input
              {...register("title")}
              className="block w-full p-2 border rounded mt-1"
              placeholder="Write your title here..."
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </label>

          <label className="block mb-2">
            Comment:
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </label>

          <div className="border border-dashed border-gray-300 rounded p-4 text-center">
            <span className="inline-block bg-gray-100 p-2 rounded">
              <ImageUp />
            </span>
            <p className="mt-2 text-gray-500">Upload Image</p>
            <input type="file" name="file" className="hidden" />
          </div>
          <p className="mt-2 text-gray-500 text-sm border-b pb-10">
            Định dạng file hợp lệ : XLSX, PNG, JPG, JPEG.Và có dung lượng dưới
            5Mb
          </p>
          <div className="flex justify-end mt-4">
            <button type="button" className="mr-4 bg-gray-300 p-2 rounded">
              Cancle
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add claim
            </button>
          </div>
        </form>
        {/* <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <div className="bg-[#fff1f0] text-[#f5222d] py-3 px-36 rounded-xl">
              Close
            </div>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddClaim;
