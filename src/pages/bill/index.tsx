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
import TopUp from "./components/top-up";
import ManagementTab from "./components/management";
import HistoryTab from "./components/history";
import PendingTab from "./components/pending";
import Withdraw from "./components/withdraw";

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
      <Tabs defaultValue="topUp" className="max-w-6xl m-10">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="topUp">
            <Landmark />
            Top up
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
          <TabsTrigger value="withdraw">
            <CircleDollarSign />
            Rút tiền
          </TabsTrigger>
        </TabsList>
        <TabsContent value="topUp">
          <TopUp />
        </TabsContent>
        <TabsContent value="management">
          <ManagementTab />
        </TabsContent>
        <TabsContent value="history">
          <HistoryTab />
        </TabsContent>
        <TabsContent value="pending">
          <PendingTab />
        </TabsContent>
        <TabsContent value="withdraw">
          <Withdraw />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Bill;
