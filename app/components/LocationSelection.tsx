"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";

const locations = [
  "789 Oak Lane, Green Valley, New York",
  "101 Cedar Street, Mountain View, Colorado",
  "567 Birch Avenue, Oceanfront, Hawaii",
];

const LocationSelection = () => {
  const [location, setLocation] = useState("Search your location");

  return (
    <Menu as="div" className="w-full h-full flex flex-col xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0 text-[15px] font-medium">
                <img src="./appointment/location.svg" alt="Location" className="text-searchIcon" />
                Location
              </div>
              <div className="font-medium text-[13px] text-gray-400 text-center xl:ml-10 xl:text-left py-2 ">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className={`dropdown-menu shadow-lg absolute ${window.innerWidth <= 767 ? "-top-56" : "top-[90px]"} left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px] `}>
          {locations.map((locationOption, index) => {
            return (
              <div
                onClick={() => setLocation(locationOption)}
                key={index}
                className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] "
              >
                {locationOption}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default LocationSelection;
