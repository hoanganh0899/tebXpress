// src/components/WalletBalance.tsx
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface WalletBalanceProps {
  balance: number;
  points: number;
  pendingAmount: number;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({
  balance,
  points,
  pendingAmount,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 m-10 max-w-6xl">
      <div className="flex flex-col items-center p-4 bg-blue-100 rounded-xl">
        <img src="http://localhost:6969/img/walletLg.f4c83d3a.svg" />
        <span className="text-gray-700">Số dư trong ví</span>
        <span className="text-2xl font-bold">
          $
          {Math.abs(balance)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className="text-lg text-gray-500">
          Điểm tích lũy: {points} điểm
        </span>
        <a href="setting/coupon">
          <span className="text-xs text-green-600 flex">
            <div>Sử dụng</div> <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </div>
      <div className="flex flex-col items-center p-4 bg-[#fff7e6] rounded-xl">
        <img src="http://localhost:6969/img/debit.069df087.svg" />
        <span className="text-gray-700">Tiền chưa thanh toán</span>
        <span className="text-xl font-semibold">$0.00</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-purple-100 rounded-xl">
        <img src="http://localhost:6969/img/time.bcb545bb.svg" />
        <span className="text-gray-700">Tiền chờ xử lý</span>
        <span className="text-xl font-semibold">
          ${pendingAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default WalletBalance;
