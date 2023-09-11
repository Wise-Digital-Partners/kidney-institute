import React from "react";

function LocationHeader({ title, copyText }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-4xl font-bold">
        <span className="text-gray-900">Choose your </span>
        <span className="text-primary-900">{title} </span>
        <span className="text-gray-900">Location </span>
      </div>
      <div className="mb-10">{copyText}</div>
    </div>
  );
}

export default LocationHeader;
