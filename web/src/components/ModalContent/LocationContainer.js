import React from "react";
import "react-tabs/style/react-tabs.css";

function LocationContainer({ locationItems, setCurrentForm }) {
  return (
    <>
      <div className={`flex flex-col space-y-4`}>
        {locationItems.map((location) => (
          <LocationButton
            label={location.label}
            name={location.name}
            address={location.address}
            setCurrentForm={setCurrentForm}
          />
        ))}
      </div>
    </>
  );
}

function LocationButton({ label, name, address, setCurrentForm }) {
  const handleClick = () => {
    setCurrentForm(name);
    console.log(name);
  };
  return (
    <button
      onClick={handleClick}
      className="group border border-solid border-gray-300 bg-transparent hover:border-primary-900 rounded-md p-4 md:px-6 md:py-4 cursor-pointer flex items-start space-x-3 text-left transition-colors duration-300 ease-linear"
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 8.33325C16.5 14.1666 9 19.1666 9 19.1666C9 19.1666 1.5 14.1666 1.5 8.33325C1.5 6.34413 2.29018 4.43647 3.6967 3.02995C5.10322 1.62343 7.01088 0.833252 9 0.833252C10.9891 0.833252 12.8968 1.62343 14.3033 3.02995C15.7098 4.43647 16.5 6.34413 16.5 8.33325Z"
          className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 10.8333C10.3807 10.8333 11.5 9.71396 11.5 8.33325C11.5 6.95254 10.3807 5.83325 9 5.83325C7.61929 5.83325 6.5 6.95254 6.5 8.33325C6.5 9.71396 7.61929 10.8333 9 10.8333Z"
          className="stroke-current	text-secondary-900 group-hover:text-primary-900 transition-colors duration-300 ease-linear"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div>
        <div className="font-heading text-lg text-secondary-900 group-hover:text-primary-900 font-semibold mb-0 leading-none transition-colors duration-300 ease-linear">
          {label}
        </div>
        <div className="text-gray-600 text-sm">{address}</div>
      </div>
    </button>
  );
}

export default LocationContainer;
