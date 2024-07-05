// src/components/tabs/AccountTab.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TopUp: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Vui lòng chuyển tiền theo thông tin dưới đây:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <p className="text-sm text-[#626363]">Ngân hàng:</p>
          <b className="text-base">MSB</b>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#626363]">Tên chủ thẻ:</p>
          <div className="flex gap-2">
            <b className="text-base">NGUYEN HOANG ANH</b>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Copy
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleCopy("NGUYEN HOANG ANH")}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#626363]">Số tài khoản:</p>
          <div className="flex gap-2">
            <b className="text-base">103 867 393 447</b>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Copy
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleCopy("103 867 393 447")}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#626363]">Nội dung chuyển khoản:</p>
          <div className="flex gap-2">
            <b className="text-base">Nap topup</b>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Copy
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleCopy("Nap topup")}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <Input placeholder="Enter the amount" />
          </div>
          <ArrowLeftRight className="mt-1" />
          <div className="w-1/2">
            <Input />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default TopUp;
