import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";
import ModalTracking from "./components/ModalTracking";

interface SearchSectionProps {
  ListPackages: any[];
  codes: string[];
}

const Tracking: React.FC<SearchSectionProps> = () => {
  const [code, setCode] = useState("");
  const [openTextarea, setOpenTextarea] = useState(false);

  const openInput = () => {
    setOpenTextarea(!openTextarea);
  };

  const closeTextarea = () => {
    setOpenTextarea(false);
  };

  const track = () => {
    // Handle the tracking logic here
    console.log("Tracking:", code);
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
          <ModalTracking
            text={code}
            setText={setCode}
            track={track}
            open={openTextarea}
            closeTextarea={closeTextarea}
          />
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
