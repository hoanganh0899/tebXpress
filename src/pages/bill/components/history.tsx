// src/components/tabs/HistoryTab.tsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { getTransactions } from "@/services/bill";
import {
  TransactionLogAffiliate,
  TransactionLogTypePay,
  TransactionLogTypePayoneer,
  TransactionLogTypePingPong,
  TransactionLogTypeRefund,
  TransactionLogTypeTopup,
} from "@/constants/bill";

interface Bill {
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  shipping_fee: number;
  extra_fee: number;
  status: number;
  user_id: number;
  package: any; // Thay any bằng kiểu phù hợp nếu có thông tin chi tiết về package
}

interface BillTransaction {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  admin_id: number;
  bill_id: number;
  bill: Bill;
  amount: number;
  description: string;
  type: number;
  status: number;
  user: any; // Thay any bằng kiểu phù hợp nếu có thông tin chi tiết về user
  admin: any; // Thay any bằng kiểu phù hợp nếu có thông tin chi tiết về admin
}
function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[250px] justify-start text-left font-normal h-[40px]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

const HistoryTab: React.FC = () => {
  const [transactions, setTransactions] = useState<BillTransaction[] | null>(
    []
  );

  const typeTopup = TransactionLogTypeTopup;
  const typePingPong = TransactionLogTypePingPong;
  const typePayoneer = TransactionLogTypePayoneer;
  const typePay = TransactionLogTypePay;
  const typeRefund = TransactionLogTypeRefund;
  const typeAffiliate = TransactionLogAffiliate;

  console.log("topup:", typeTopup);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const payments = await getTransactions();
        setTransactions(payments.transactions);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchData();
  }, []);

  console.log("transaction:", transactions);

  return (
    <Card>
      <CardContent className="space-y-2">
        <div className="flex justify-between mt-5 gap-3">
          <div className="mb-4 w-full">
            <select className="border p-2 w-full rounded-md">
              <option>Chọn loại giao dịch</option>
              <option>Nạp tiền</option>
              <option>Thanh toán</option>
              <option>Hoàn tiền</option>
            </select>
          </div>
          <div className="mb-4">
            <DatePickerWithRange />
          </div>
        </div>
        {transactions!.length > 0 ? (
          transactions?.map((item, i) => (
            <div className="flex justify-between transaction-info" key={i}>
              <div>
                {/* {item.type === typeRefund || item.type === typeAffiliate ? (
                  <img src={require("@assets/img/rotate-left.svg")} alt="" />
                ) : (
                  <img
                    src={
                      item.type === typeTopup ||
                      item.type === typePayoneer ||
                      item.type === typePingPong
                        ? require("@assets/img/in.svg")
                        : require("@assets/img/out.svg")
                    }
                    alt=""
                  />
                )} */}
                <div>
                  <div>
                    {item.type === typeTopup ||
                    item.type === typePayoneer ||
                    item.type === typePingPong
                      ? "Nạp tiền vào ví"
                      : item.type === typeRefund || item.type === typeAffiliate
                        ? "Hoàn tiền cho hóa đơn"
                        : "Thanh toán hóa đơn"}
                  </div>
                  <span>
                    {/* {formatWeekday(item.created_at)},{" "} */}
                    {new Date(item.created_at).toLocaleDateString(
                      "vi-VN"
                    )} -{" "}
                    {new Date(item.created_at).toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              <div>
                <div>
                  {item.type === typePayoneer || item.type === typePingPong
                    ? `+ ${Math.abs(item.amount).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`
                    : `${item.type === typePay ? "-" : "+"} ${Math.abs(item.amount).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}`}
                </div>
                <span>{item.status}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default HistoryTab;
