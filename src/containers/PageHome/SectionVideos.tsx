import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import NcPlayIcon2 from "shared/NcPlayIcon2/NcPlayIcon2";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}



const SectionVideos: FC<SectionVideosProps> = ({
  className = "",
}) => {





  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="In Prime location"
      >
        Buy
        <b className="text-info">Dream</b> Apartment

      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40">
          <img src="https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg" />
        </div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6 "  >
          <div
            className="group aspect-w-16 aspect-h-8 sm:aspect-h-5 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
            title={"BuyDream Apartment"}
            style={{ width: "70%" }}

          >
            <iframe
              src={`https://www.youtube.com/embed/am4i2btzzsQ?autoplay=1`}
              title={"In Prime location"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SectionVideos;
