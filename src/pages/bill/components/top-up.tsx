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

const TopUp: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Vui lòng chuyển tiền theo thông tin dưới đây:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <p>Ngân hàng:</p>
          <b>MSB</b>
        </div>
        <div className="space-y-1">
          <p>Tên chủ thẻ:</p>
          <b>NGUYEN HOANG ANH</b>
        </div>
        <div className="space-y-1">
          <p>Số tài khoản:</p>
          <b>103 867 393 447</b>
        </div>
        <div className="space-y-1">
          <p>Nội dung chuyển khoản:</p>
          <b>Nap topup</b>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default TopUp;
