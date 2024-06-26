import React, { useState, useEffect } from "react";
import PageHead from "@/components/shared/page-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import OrderStatsChart from "./components/overview";

type TimeFrame = "d7" | "d14" | "d30";

const DashboardPage: React.FC = () => {
  const [time, setTime] = useState<TimeFrame>("d14");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date>(new Date());

  // Function to calculate start and end dates based on selected time
  useEffect(() => {
    const today = new Date();
    let daysToAdd = 0;

    switch (time) {
      case "d7":
        daysToAdd = 7;
        break;
      case "d14":
        daysToAdd = 14;
        break;
      case "d30":
        daysToAdd = 30;
        break;
      default:
        daysToAdd = 14; // Default to 14 days if none is selected
        break;
    }

    const start = new Date(today);
    start.setDate(today.getDate() - daysToAdd + 1); // Calculate start date

    setStartDate(start);
    setEndDate(today); // End date is today
  }, [time]);

  return (
    <>
      <PageHead title="Dashboard | TebXpress" />
      <div>
        <div className="p-4 pt-6 md:p-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Hi, Welcome back 👋
            </h2>
            <div className="actions">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value as TimeFrame)}
                className="rounded-xl border bg-[#f6f7f7] px-3 pb-[7px] pt-[3px] leading-[2.2rem] text-[#626363]"
              >
                <option value="d7">7 ngày gần đây</option>
                <option value="d14">14 ngày gần đây</option>
                <option value="d30">30 ngày gần đây</option>
              </select>
              {startDate && (
                <p>
                  {startDate.toLocaleDateString()} -{" "}
                  {endDate.toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <Tabs defaultValue="overview" className=" space-y-4 mt-10">
            <TabsContent value="overview" className="space-y-4">
              <div className="">
                <Card className="">
                  <CardHeader>
                    <CardTitle>Thống kê đơn hàng</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <OrderStatsChart startDate={startDate} endDate={endDate} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
