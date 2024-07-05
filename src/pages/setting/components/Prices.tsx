import { getListServices } from "@/services/settings/price";
import React, { useState } from "react";

type ListService = {
  id: number;
  name: string;
  code: string;
  prices?: null;
};
interface PriceRow {
  service: string;
  weight: string;
  price: string;
}

const expressData: PriceRow[] = [
  { service: "Express", weight: "<100", price: "5.39" },
  { service: "Express", weight: "100-200", price: "6.51" },
  { service: "Express", weight: "200-300", price: "9.11" },
  { service: "Express", weight: "300-400", price: "9.91" },
  { service: "Express", weight: "400-450", price: "11.57" },
  { service: "Express", weight: "450-550", price: "12.65" },
  { service: "Express", weight: "550-700", price: "15.25" },
  { service: "Express", weight: "700-900", price: "17.28" },
  { service: "Express", weight: "900-1100", price: "19.02" },
  { service: "Express", weight: "1100-1350", price: "21.35" },
  { service: "Express", weight: "1350-1500", price: "22.86" },
  { service: "Express", weight: "1500-1800", price: "25.48" },
  { service: "Express", weight: "1800-2000", price: "27.86" },
  { service: "Express", weight: "2000-2200", price: "30.26" },
  { service: "Express", weight: "2200-2400", price: "32.05" },
];

const saverData: PriceRow[] = [
  { service: "Saver", weight: "<100", price: "3.50" },
  { service: "Saver", weight: "100-200", price: "4.75" },
  { service: "Saver", weight: "200-300", price: "6.25" },
];

const PriceTable: React.FC = () => {
  const [listService, setListService] = useState<ListService[]>([]);
  const [currentData, setCurrentData] = useState<PriceRow[]>(expressData);
  const [activeButton, setActiveButton] = useState<string>("Express");

  React.useEffect(() => {
    const fetchListService = async () => {
      try {
        const services = await getListServices();
        setListService(services.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchListService();
  }, []);
  const handleButtonClick = (service: string) => {
    switch (service) {
      case "Express":
        setCurrentData(expressData);
        break;
      case "Saver":
        setCurrentData(saverData);
        break;
      default:
        setCurrentData(expressData);
    }
    setActiveButton(service);
  };

  return (
    <>
      <div className="flex justify-center mb-4 my-10">
        <button
          className={`px-4 py-2 rounded mr-2 ${activeButton === "Express" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleButtonClick("Express")}
        >
          Express
        </button>
        <button
          className={`px-4 py-2 rounded mr-2 ${activeButton === "Saver" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
          onClick={() => handleButtonClick("Saver")}
        >
          Saver
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b-2">
                <th className="py-2">Dịch vụ</th>
                <th className="py-2">Cân nặng (GRAM)</th>
                <th className="py-2">Giá ($)</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2">{row.service}</td>
                  <td className="py-2">{row.weight}</td>
                  <td className="py-2">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
