import React, { FC, useState } from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
import { DEMO_STAY_LISTINGS } from "data/listings";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";
import { PropertyDataType, StayDataType } from "data/types";

export interface PropertyCardHProps {
  className?: string;
  data?: PropertyDataType;

}

// const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const PropertyCardH: FC<PropertyCardHProps> = ({
  className = "",
  data,
}) => {
  const status = 0;




  const [statusproperty, setStatus] = useState(0)

  return (
    <div
      className={`nc-PropertyCardH row group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      // className="row"
      style={{ margin: "5px" }}
      data-nc-id="PropertyCardH"
    >
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div className="flex-shrink-0 p-3 w-full sm:w-64 " style={{ width: "100%" }}>
            
              <img src={`http://localhost:3000/images/${data?.propertyImgage[0]}`} style={{ width: "100%", height: "250px" }} />
           
            </div>
            <div className="flex-grow p-3 sm:pr-4 flex flex-col items-start row">
              <div className="space-y-4 w-full col-md-4">
                <div className="inline-flex space-x-3">

                  {data?.propertyStatus == "Rent" ? <Badge
                    name={
                      <div className="flex items-center">
                        <i className="text-sm las la-share-alt"></i>
                        <span className="ml-1">Rent</span>
                      </div>
                    }
                  /> : <Badge
                    name={
                      <div className="flex items-center">
                        {/* <i className="text-sm las la-user-friends"></i> */}
                        <i className="text-sm lab la-sellcast"></i>
                        <span className="ml-1">Sell</span>
                      </div>
                    }
                    color="yellow"
                  />}



                  <span className="flex items-center justify-center px-3 py-2 border border-secondary-500 rounded leading-none text-base font-medium text-secondary-500">
                    {`$ ${data?.propertyPrice}`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">

                  <h2 className="text-lg font-medium capitalize">
                    <span className="line-clamp-2">{data?.propertyName}</span>
                  </h2>
                </div>
                <div className="inline-grid grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                      <i className="las la-bed text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {data?.bedRoom} beds
                    </span>
                  </div>

                  {/* ---- */}
                  <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                      <i className="las la-bath text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {data?.bathRoom} baths
                    </span>
                  </div>

                  {/* ---- */}
                  <div className="flex items-center space-x-2">
                    <span className="hidden sm:inline-block">
                      <i className="las la-expand-arrows-alt text-lg"></i>
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {data?.areaSquareFeet} Sq. Fit
                    </span>
                  </div>
                </div>
                <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 "></div>

              </div>
            </div>
          </div>
        </div>
        {/* <BtnLikeIcon
          colorClass={` bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-6000 dark:text-neutral-400`}
          isLiked={like}
          className="absolute right-5 top-5 sm:right-3 sm:top-3 "
        /> */}
      </div>
    </div>
  );
};

export default PropertyCardH;
