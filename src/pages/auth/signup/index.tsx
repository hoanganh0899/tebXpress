import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(1, 'Tên tài khoản là bắt buộc'),
  shippingScale: z.string().min(1, 'Quy mô vận chuyển là bắt buộc'),
  phone: z
    .string()
    .min(10, 'Số điện thoại không hợp lệ')
    .max(11, 'Số điện thoại không hợp lệ'),
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
});

type FormData = z.infer<typeof schema>;

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <img
        src="../../../../tebxpress-high-resolution-logo-transparent.png"
        className="max-w-xs bg-gray-100"
      />

      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <form
          className="w-1/3 rounded-2xl bg-white p-8 shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="mb-6 text-center text-2xl">Tạo tài khoản mới</h2>

          <div className="mb-4">
            <label className="mb-1 block">Tên tài khoản:</label>
            <input
              {...register('username')}
              className="w-full rounded border px-3 py-2"
              placeholder="Nhập tên tài khoản"
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Quy mô vận chuyển:</label>
            <select
              {...register('shippingScale')}
              className="w-full rounded border px-3 py-2"
            >
              <option value="">Chọn quy mô vận chuyển</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.shippingScale && (
              <p className="text-sm text-red-500">
                {errors.shippingScale.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Số điện thoại:</label>
            <input
              {...register('phone')}
              className="w-full rounded border px-3 py-2"
              placeholder="Nhập số điện thoại của bạn"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Email:</label>
            <input
              {...register('email')}
              className="w-full rounded border px-3 py-2"
              placeholder="Nhập email của bạn"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Mật khẩu:</label>
            <input
              type="password"
              {...register('password')}
              className="w-full rounded border px-3 py-2"
              placeholder="Nhập mật khẩu"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Đăng ký tài khoản
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
