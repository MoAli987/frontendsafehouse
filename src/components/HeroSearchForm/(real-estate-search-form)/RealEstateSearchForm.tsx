import React, { useState, useRef, useEffect, FC } from "react";

import { CurrencyDollarIcon, MapPinIcon, HomeModernIcon } from "@heroicons/react/24/outline";
// import LocationInput from "../LocationInput.1";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";
import { Link } from "react-router-dom";
export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
}
export type SearchRealEstateTab = "Buy" | "Rent";

const RealEstateSearchForm: FC<LocationInputProps> = ({
  autoFocus = false,
  placeHolder = "Location",
  desc = "Where are you going?",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tabs: SearchRealEstateTab[] = ["Buy", "Rent"];
  const [tabActive, setTabActive] = useState<SearchRealEstateTab>("Buy");
  const [value, setValue] = useState({
    propertyCity: "",
    typefor: "",
    propertyPrice: "",
    propertyStatus: "Buy",
  });
  const [showPopoverL, setShowPopoverL] = useState(autoFocus);
  const [showPopoverA, setShowPopoverA] = useState(autoFocus);
  const [showPopoverP, setShowPopoverP] = useState(autoFocus);

  useEffect(() => {
    setShowPopoverL(autoFocus);
    setShowPopoverA(autoFocus);
    setShowPopoverP(autoFocus);
  }, [autoFocus]);

  // http://localhost:3001/property-listFilter/lahore/2000/Rent/hotel


  const renderForm = () => {
    return (<>
      <ul className="ml-6 md:ml-16 xl:ml-20 inline-flex space-x-4 sm:space-x-8 lg:space-x-10 bg-white dark:bg-neutral-900 pb-6 md:p-6 !pl-0 xl:p-0 rounded-t-3xl">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => {
                setTabActive(tab)
                setValue({ ...value, "propertyStatus": tab })
              }}
              className={`flex items-center cursor-pointer text-sm lg:text-base font-medium  ${active
                ? "btn-info text-white btn"
                : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-100 btn "
                } `}
              key={tab}
            >
              {/* {active && (
              <span className="block w-2.5 h-2.5 rounded-full btn-danger dark:bg-neutral-100 mr-2" />
            )} */}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
      <div className="w-full relative card xl:mt-8 flex flex-col lg:flex-row lg:items-center  shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        {/* <LocationInput autoFocus={false} placeHolder="Location" className="flex-[1.5]" /> */}
        <div className={`relative flex ${className}`} ref={containerRef}>
          <div

            className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${value.propertyCity != "" ? "nc-hero-field-focused" : ""
              }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
            </div>
            <div className="flex-grow">
              <input
                className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
                placeholder={"Location City"}
                value={value.propertyCity}

                onChange={(e) => {
                  setValue({ ...value, "propertyCity": e.target.value })
                }}
                ref={inputRef}
              />

            </div>
          </div>


        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className={`relative flex ${className}`} ref={containerRef}>
          <div

            className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${value.typefor != "" ? "nc-hero-field-focused" : ""
              }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <HomeModernIcon className="w-5 h-5 lg:w-7 lg:h-7" />
            </div>
            <div className="flex-grow">
              <input
                className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
                placeholder={"Property Type"}
                value={value.typefor}

                onChange={(e) => {
                  setValue({ ...value, "typefor": e.target.value })
                }}
                ref={inputRef}
              />

            </div>
          </div>


        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className={`relative flex ${className}`} ref={containerRef}>
          <div

            className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${value.propertyPrice != "" ? "nc-hero-field-focused" : ""
              }`}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <CurrencyDollarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
            </div>
            <div className="flex-grow">
              <input
                className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
                placeholder={"Price"}
                type="number"
                value={value.propertyPrice}

                onChange={(e) => {
                  setValue({ ...value, "propertyPrice": e.target.value })
                }}
                ref={inputRef}
              />

            </div>
          </div>


        </div>


        <div className="pr-2 xl:pr-4">
          {/* <ButtonSubmit href="/listing-real-estate" /> */}
          <Link to={`/property-listFilter/${value.propertyCity!=""?value.propertyCity:"-"}/${value.propertyPrice!=""?value.propertyPrice:"-"}/${value.propertyStatus!=""?value.propertyStatus:"-"}/${value.typefor!=""?value.typefor:"-"}`} className="btn btn-primary  text-white" onClick={()=>{
          }}>Sreach</Link>
        </div>
      </div></>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;
