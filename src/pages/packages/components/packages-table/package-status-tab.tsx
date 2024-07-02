import React, { useState } from "react";

interface TabProps {
  label: string;
  index: number;
  setSelectedIndex: (index: number) => void;
  selectedIndex: number;
}

const Tab: React.FC<TabProps> = ({
  label,
  index,
  setSelectedIndex,
  selectedIndex,
}) => {
  const isSelected = selectedIndex === index;
  return (
    <button
      className={`px-4 py-2 focus:outline-none ${
        isSelected
          ? "text-blue-500 border-b-2 border-blue-500"
          : "text-gray-500"
      }`}
      onClick={() => setSelectedIndex(index)}
    >
      {label}
    </button>
  );
};

const PackageTabs: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    "All",
    "Pending",
    "Pre-Transit",
    "In-Transit",
    "Delivered",
    "Alert",
    "Canceled",
    "Expired",
    "Undelivered",
    "Archived",
  ];

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            index={index}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
      <div className="p-4">
        {selectedIndex === 0 && <div>All Content</div>}
        {selectedIndex === 1 && <div>Pending Content</div>}
        {selectedIndex === 2 && <div>Pre-Transit Content</div>}
        {selectedIndex === 3 && <div>In-Transit Content</div>}
        {selectedIndex === 4 && <div>Delivered Content</div>}
        {selectedIndex === 5 && <div>Alert Content</div>}
        {selectedIndex === 6 && <div>Canceled Content</div>}
        {selectedIndex === 7 && <div>Expired Content</div>}
        {selectedIndex === 8 && <div>Undelivered Content</div>}
        {selectedIndex === 9 && <div>Archived Content</div>}
      </div>
    </div>
  );
};

export default PackageTabs;
