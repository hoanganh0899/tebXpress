import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import PageHead from "@/components/shared/page-head";

const schema = z.object({
  name: z.string().nonempty("Tên không hợp lệ"),
  password: z.string().min(6, "Vui lòng nhập mật khẩu mới"),
  newPassword: z.string().nonempty("Vui lòng không để trống!"),
});

type FormData = z.infer<typeof schema>;

const Account: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <>
      <PageHead title="Account | TebXpress" />
      <div className="">
        <h2 className="text-3xl font-medium m-6">Thông tin tài khoản</h2>
        <div className="flex justify-center items-center mt-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Họ và tên:
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Mật khẩu hiện tại:
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700">
                Mật khẩu mới:
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  {...register("newPassword")}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                <button
                  type="button"
                  onClick={toggleNewPasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                >
                  {showNewPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500">{errors.newPassword.message}</p>
              )}
            </div>

            {/* <div className="mb-4">
            <input
              type="checkbox"
              id="notifications"
              {...register("notifications")}
            />
            <label htmlFor="notifications" className="ml-2 text-gray-700">
              Chi notifications order bookmark
            </label>
          </div> */}

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Lưu
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
