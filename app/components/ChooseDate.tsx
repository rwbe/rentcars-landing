"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const PickupDate = () => {
  type DateRangeType = {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string;
  };

  const [date, setDate] = useState<DateRangeType[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verifica se estamos no navegador antes de tentar acessar o window
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleDateChange = (rangesByKey: any) => {
    const { selection } = rangesByKey;
    const { startDate, endDate } = selection;

    if (startDate && endDate) {
      setDate([{ startDate, endDate, key: "selection" }]);
    }
  };

  return (
    <Menu as="div" className="w-full h-full flex flex-col xl:flex-row border-r-[1px] ">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <img src="./appointment/calendar.svg" alt="Calendar" className="text-searchIcon" />
            <div className="text-[15px] font-medium">Pickup date</div>
          </div>
          <div className={`flex items-center gap-x-3 xl:ml-6 py-2 ${isMobile ? "flex-col" : ""}`}>
            {date[0].startDate && date[0].endDate ? (
              <div className={`${isMobile ? "mb-2" : ""} flex items-center gap-2 text-secondary`}>
                <div>{format(date[0].startDate as Date, "EEE dd MMM, HH:mm")}</div>
                <FaArrowRight className="text-black text-[12px]" />
                <div>
                  <div>{format(date[0].endDate as Date, "EEE dd MMM, HH:mm")}</div>
                </div>
              </div>
            ) : (
              <div className={`${isMobile ? "mb-2" : ""} uppercase font-medium text-[13px] text-gray-400 text-center ml-4`}>
                {new Date().toLocaleDateString("en-US")}
              </div>
            )}
          </div>
        </Menu.Button>
        <Menu.Items className={`dropdown-menu shadow-lg absolute ${isMobile ? "-top-96" : "top-[90px]"} left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden `}>
          <DateRange
            onChange={handleDateChange as any}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#1572D3"]}
            minDate={new Date()}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default PickupDate;
