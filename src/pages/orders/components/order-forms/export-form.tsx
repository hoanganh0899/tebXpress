// ExportOrdersForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema for form validation
const exportOrdersSchema = z.object({
  exportOption: z.enum([
    "selected",
    "currentPage",
    "allConditions",
    "customConditions",
  ]),
});

type ExportOrdersFormData = z.infer<typeof exportOrdersSchema>;

const ExportOrdersForm = ({ modalClose }: { modalClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExportOrdersFormData>({
    resolver: zodResolver(exportOrdersSchema),
  });

  const onSubmit = (data: ExportOrdersFormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Export Orders</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="selected"
              value="selected"
              {...register("exportOption")}
              className="mr-2"
            />
            <label htmlFor="selected" className="text-gray-700">
              Xuất những đơn đã tick chọn trên màn hình
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="currentPage"
              value="currentPage"
              {...register("exportOption")}
              className="mr-2"
            />
            <label htmlFor="currentPage" className="text-gray-700">
              Xuất page hiện tại
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="allConditions"
              value="allConditions"
              {...register("exportOption")}
              className="mr-2"
            />
            <label htmlFor="allConditions" className="text-gray-700">
              Xuất tất cả theo điều kiện search
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="customConditions"
              value="customConditions"
              {...register("exportOption")}
              className="mr-2"
            />
            <label htmlFor="customConditions" className="text-gray-700">
              Xuất theo điều kiện search, theo tháng tùy chọn
            </label>
          </div>
          {errors.exportOption && (
            <p className="text-red-500 text-xs italic">
              {errors.exportOption.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={modalClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExportOrdersForm;
