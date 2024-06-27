import React, { useState } from "react";
import { ModalTracking } from "./ModalTracking"; // Import your ModalTracking component
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

interface SearchSectionProps {
  ListPackages: any[];
  codes: string[];
}

const Tracking: React.FC<SearchSectionProps> = ({ ListPackages, codes }) => {
  const [code, setCode] = useState<string>("");
  const [openTextarea, setOpenTextarea] = useState<boolean>(false);

  const openInput = () => {
    setOpenTextarea(!openTextarea);
  };

  const track = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className={`search__section relative pt-[140px]`}>
      <div className="title mx-auto w-[680px] mb-10">
        <h2 className="text-4xl font-bold mb-1">Track Order Journey</h2>
        <span className="text-sm">
          Track up to 50 tracking numbers at once.
        </span>
      </div>

      <div className="search-form w-[680px] mx-auto mb-1.5 relative z-[3]">
        <div className="search-input">
          <input
            className={`input-1 absolute border border-[#141f65] box-border rounded-lg w-[545px] h-14 pl-4 text-sm leading-6 text-[#313232]`}
            onClick={openInput}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Please enter the tracking number, separated by enter"
          />
          {/* <ModalTracking
            className={`input-multi ${openTextarea ? "input-multi-open" : ""}`}
            id="textarea"
            text={code}
            onTrack={track}
          /> */}
        </div>
        <div className="button-group w-[127px] flex flex-col absolute right-0">
          <Button className="btn btn-tracking color-[#fff] bg-[#141f65] h-14">
            <FileSearch className="mr-3" />
            <span className="font-medium text-sm leading-6">Track</span>
          </Button>
        </div>
      </div>
      <div className="wrapper" onClick={() => setOpenTextarea(false)}></div>
    </div>
  );
};

export default Tracking;
