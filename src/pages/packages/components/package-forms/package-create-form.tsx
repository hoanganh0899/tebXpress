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
import { createPackage } from "@/services/packages";

const orderFormSchema = z.object({
  service: z.string().min(1, { message: "Service is required" }),
  recipient: z.string().min(1, { message: "recipient is required" }),
  invoiceName: z.string().optional(),
  phone: z.string().optional(),
  address_2: z.string().optional(),
  address_1: z.string().min(1, { message: "address_1 is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state_code: z.string().min(1, { message: "State is required" }),
  country_code: z.string().min(1, { message: "Country is required" }),
  detail: z.string().min(1, { message: "Product is required" }),
  zipcode: z.string().min(1, { message: "Post code is required" }),
  order_number: z.string().min(1, { message: "Order number is required" }),
  weight: z.string().min(1, { message: "Weight is required" }),
  length: z.string().min(1, { message: "Length is required" }),
  width: z.string().min(1, { message: "Width is required" }),
  height: z.string().min(1, { message: "Height is required" }),
});

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

  const onSubmit = async (values: OrderFormSchemaType) => {
    try {
      const result = await createPackage(values);
      console.log("Order created successfully:", result);
    } catch (error) {
      console.error("Error creating order:", error);
    }
    console.log("value:", values);
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
          <div className="grid grid-cols-2 gap-x-8 max-md:grid-cols-1">
            <div className="border p-4 shadow-md">
              <strong className="">Thông tin người nhận</strong>
              <hr className="my-4" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 ">
                <FormField
                  control={form.control}
                  name="service"
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
                  name="recipient"
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
                  name="address_1"
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
                  name="address_2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address 2</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="address"
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
                  name="zipcode"
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
                  name="state_code"
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
                  name="country_code"
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
                  name="detail"
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
                  name="order_number"
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
                  name="weight"
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
                  name="length"
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
                  name="width"
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
                  name="height"
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
