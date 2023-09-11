import React, { useState } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery } from "gatsby";
import dialysisClinic from "../../../images/Locations/Icons/dialysis-clinic.svg";
import nephrologyOffice from "../../../images/Locations/Icons/nephrology-office.svg";
import { NephrologyIcon } from "./NephrologyIcon";
import { DialysisIcon } from "./DialysisIcon";

function LocationSwitch({ setCurrentOption }) {
  const locations = [
    {
      name: "dialysis-clinic",
      label: "Dialysis Clinic",
      icon: dialysisClinic,
    },
    {
      name: "nephrology-office",
      label: "Nephrology Office",
      icon: nephrologyOffice,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center w-full gap-x-[17px] gap-y-[17px] justify-center">
      {locations.map((location) => (
        <LocationButton
          key={location.name}
          name={location.name}
          label={location.label}
          icon={location.icon}
          setCurrentOption={setCurrentOption}
        />
      ))}
    </div>
  );
}

function LocationButton({ name, label, icon, setCurrentOption }) {
  const handleClick = () => {
    setCurrentOption(name);
  };

  return (
    <div
      className="rounded-md border-[1px] border-gray-300 flex flex-col justify-center items-center w-[231px] h-[197px] gap-y-[17px] group cursor-pointer hover:border-primary-900 transition-colors duration-300 ease-linear"
      onClick={handleClick}
    >
      <div className="rounded-[50%] bg-gray-100 w-20 h-20 flex justify-center items-center ">
        {name === "nephrology-office" ? <NephrologyIcon /> : <DialysisIcon />}
      </div>
      <div className="text-secondary-900 text-xl group-hover:text-primary-900 font-semibold transition-colors duration-300 ease-linear">
        {label}
      </div>
    </div>
  );
}

export default LocationSwitch;
