import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paperclip } from "lucide-react";

// Define Zod schema for form validation
const importOrdersSchema = z.object({
  file: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "File is required"),
});

type ImportOrdersFormData = z.infer<typeof importOrdersSchema>;

const ImportOrdersForm = ({ modalClose }: { modalClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImportOrdersFormData>({
    resolver: zodResolver(importOrdersSchema),
  });

  const onSubmit = (data: ImportOrdersFormData) => {
    console.log("Form data:", data);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Import Orders</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            File to import
          </label>
          <div className="flex ">
            <Paperclip className="" />
            <input
              type="file"
              id="file"
              {...register("file")}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-5"
            />
            {errors.file && (
              <p className="text-red-500 text-xs italic">
                {errors.file.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={modalClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImportOrdersForm;
