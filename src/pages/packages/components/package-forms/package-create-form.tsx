import Heading from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

const orderFormSchema = z.object({
  firstname: z.string().min(1, { message: "firstname is required" }),
  recipientName: z.string().min(1, { message: "recipientName is required" }),
  invoiceName: z.string().min(1, { message: "invoiceName is required" }),
  phone: z.string().min(1, { message: "phone is required" }),
  orderValue: z.string().min(1, { message: "orderValue is required" }),
  address: z.string().min(1, { message: "address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  nameProduct: z.string().min(1, { message: "Product is required" }),
  // confirmPassword: z
  //   .string()
  //   .min(1, { message: 'Confirm Password is required' })
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords must match',
//   path: ['confirmPassword']
// });

type OrderFormSchemaType = z.infer<typeof orderFormSchema>;

type ProductFormProps = {
  control: any;
  index: number;
  removeForm: (index: number) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({
  control,
  index,
  removeForm,
}) => (
  <div className="relative grid grid-cols-2 gap-x-5 gap-y-4 border p-4 shadow-sm">
    <FormField
      control={control}
      name={`sku-${index}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>SKU</FormLabel>
          <FormControl>
            <Input
              placeholder="sku"
              {...field}
              className="px-4 py-6 shadow-inner drop-shadow-xl"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={control}
      name={`name-${index}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tên sản phẩm</FormLabel>
          <FormControl>
            <Input
              placeholder="Tên sản phẩm"
              {...field}
              className="px-4 py-6 shadow-inner drop-shadow-xl"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={control}
      name={`quantity-${index}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Số lượng</FormLabel>
          <FormControl>
            <Input
              placeholder="Số lượng"
              {...field}
              className="px-4 py-6 shadow-inner drop-shadow-xl"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <button
      className="absolute right-0 top-0 p-1 text-red-500"
      onClick={() => removeForm(index)}
    >
      &#10005; {/* Unicode character for 'X' */}
    </button>
  </div>
);

const OrderCreateForm = ({ modalClose }: { modalClose: () => void }) => {
  const form = useForm<OrderFormSchemaType>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: OrderFormSchemaType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  const service = [
    { id: 1, name: "US" },
    { id: 2, name: "EU" },
  ];

  const [forms, setForms] = useState([{ id: 1 }]);

  const addForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

  const removeForm = (index: number) => {
    if (forms.length > 1) {
      setForms(forms.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="w-full px-2">
      <div className="flex items-center justify-center text-2xl font-bold">
        <img
          src="../../../../../tebxpress-high-resolution-logo-transparent.png"
          className="w-4/12"
        />
      </div>

      <Heading title={"Add Order"} className="space-y-2 py-4 text-center" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile</FormLabel>
                <FormControl>
                  <FileUpload onChange={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <div className="grid grid-cols-2 gap-x-8 max-md:grid-cols-1">
            <div className="border p-4 shadow-md">
              <strong className="">Thông tin người nhận</strong>
              <hr className="my-4" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 ">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value?.toString()}
                          onValueChange={(value) => {
                            if (value) {
                              field.onChange(value);
                            }
                          }}
                        >
                          <SelectTrigger className="mb-4 box-border h-[48px] w-full px-[0.75rem] text-base leading-6">
                            <SelectValue placeholder="Dịch vụ" />
                          </SelectTrigger>
                          <SelectContent>
                            <ScrollArea type="always" className="max-h-64">
                              {service.length > 0
                                ? service?.map((c) => (
                                    <SelectItem key={c.id} value={`${c.id}`}>
                                      {c.name}
                                      {/* {c.parent ? ` (${c.parent.name})` : ''} */}
                                    </SelectItem>
                                  ))
                                : null}
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recipientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên người nhận</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tên người nhận"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="invoiceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên hóa đơn</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tên hóa đơn"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Số điện thoại"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Giá trị đơn hàng (USD)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="đơn vị USD"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Địa chỉ nhận hàng</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Chỉ gồm tên đường số nhà"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thành phố</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="thành phố"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mã bưu điện</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="mã bưu điện"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bang</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="bang"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quốc gia</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="quốc gia"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="border p-4 shadow-md">
              <strong className="">Thông tin đơn hàng</strong>
              <hr className="my-4" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <FormField
                  control={form.control}
                  name="nameProduct"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chi tiết sản phẩm</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Chi tiết sản phẩm"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="invoiceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mã đơn hàng</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Mã đơn hàng"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Trọng lượng</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="gram"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orderValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dài</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cm"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rộng</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cm"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cao</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="cm"
                          {...field}
                          className=" px-4 py-6 shadow-inner drop-shadow-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <label
                    htmlFor="terms"
                    className="mr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hàng có pin
                  </label>
                  <Checkbox id="terms" />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-4 shadow-md">
            <div className="flex">
              <strong className="mr-2">Sản phẩm</strong>
              <button onClick={addForm}>
                <CirclePlus />
              </button>
            </div>
            <hr className="my-4" />
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {forms.map((formItem, index) => (
                <ProductForm
                  key={formItem.id}
                  control={form.control}
                  index={index}
                  removeForm={removeForm}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">
              <div className="total">
                <div className="total-title text-xs font-medium text-[#aaabab]">
                  Cước tạm tính:
                </div>
                <span className="total-number text-[28px] font-semibold leading-[34px] text-[#111212]">
                  $0.00
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                type="button"
                variant="secondary"
                className="rounded-full "
                size="lg"
                onClick={modalClose}
              >
                Cancel
              </Button>
              <Button type="submit" className="rounded-full" size="lg">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderCreateForm;
