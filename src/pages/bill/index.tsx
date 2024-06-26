import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRightLeft,
  CandlestickChart,
  CircleDollarSign,
  FileClock,
  FileCog,
  Landmark,
} from "lucide-react";
import WalletBalance from "./components/wallet-balance";

const Bill: React.FC = () => {
  const balance = 0.0;
  const points = 0;
  const pendingAmount = 0.0;
  return (
    <div className="mx-auto my-10">
      <WalletBalance
        balance={balance}
        points={points}
        pendingAmount={pendingAmount}
      />
      <Tabs defaultValue="account" className="max-w-6xl m-10">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="account">
            <Landmark />
            Nạp tiền
          </TabsTrigger>
          <TabsTrigger value="management">
            <FileCog />
            Management
          </TabsTrigger>
          <TabsTrigger value="history">
            <ArrowRightLeft />
            Transaction history
          </TabsTrigger>
          <TabsTrigger value="pending">
            <FileClock />
            Pending bill
          </TabsTrigger>
          <TabsTrigger value="exchange">
            <CandlestickChart />
            Exchange
          </TabsTrigger>
          <TabsTrigger value="password">
            <CircleDollarSign />
            Rút tiền
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              {/* <CardTitle>Account</CardTitle> */}
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
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              {/* <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Bank name</Label>
                <Input id="current" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Bank number</Label>
                <Input id="new" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="money">Amount</Label>
                <Input id="" type="number" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Bill;
