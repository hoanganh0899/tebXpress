import React, { useState } from "react";
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
  TransactionStatusFailure,
  TransactionStatusProcess,
  TransactionStatusSuccess,
} from "@/constants/bill";
import { Link } from "react-router-dom";

type Bill = {
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  shipping_fee: number;
  extra_fee: number;
  status: number;
  user_id: number;
  package: any;
};

type BillTransaction = {
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
  user: any;
  admin: any;
};

type Status = {
  [key: number]: { text: string; className: string };
};
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

  const Process = TransactionStatusProcess;
  const Success = TransactionStatusSuccess;
  const Failure = TransactionStatusFailure;

  const statusText: Status = {
    [Process]: { text: "Pending", className: "text-[#aaabab]" },
    [Success]: { text: "Success", className: "text-[#48be78]" },
    [Failure]: { text: "Failed", className: "text-[#f5222d]" },
  };

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
            <div
              className="flex justify-between transaction-info border-b pb-5"
              key={i}
            >
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
                  <div className="flex gap-2 font-medium">
                    <div>
                      {item.type === typeTopup ||
                      item.type === typePayoneer ||
                      item.type === typePingPong
                        ? "Nạp tiền vào ví"
                        : item.type === typeRefund ||
                            item.type === typeAffiliate
                          ? "Hoàn tiền cho hóa đơn"
                          : "Thanh toán hóa đơn"}
                    </div>
                    {item.bill && (
                      <Link
                        to={{
                          pathname: `/bill/detail/${item.bill.code}`,
                        }}
                      >
                        <div className="text-[#006a5e]">{item?.bill.code}</div>
                      </Link>
                    )}
                  </div>
                  <span className="text-sm text-[#626363]">
                    {new Date(item.created_at).toLocaleDateString("us-US", {
                      weekday: "long", // Adjust "long" to "short" or "narrow" for different weekday formats
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(item.created_at).toLocaleTimeString("us-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold">
                  {item.type === typePayoneer || item.type === typePingPong
                    ? `+ $ ${Math.abs(item.amount)
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                    : ` ${item.type === typePay ? "-" : "+"} $${Math.abs(
                        item.amount
                      )
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
                <span
                  className={`float-right ${statusText[item.status].className} text-sm`}
                >
                  {statusText[item.status].text}
                </span>
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
