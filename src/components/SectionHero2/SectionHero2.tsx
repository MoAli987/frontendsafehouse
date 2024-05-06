import React, { FC } from "react";
import imagePng from "images/hero-right-3.png";
import HeroRealEstateSearchForm from "components/HeroSearchForm/(real-estate-search-form)/HeroRealEstateSearchForm";
import hexToRGB from "utils/hexToRgb";

export interface SectionHero2Props {
  className?: string;
  children?: React.ReactNode;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  return (
    <div
      className={`nc-SectionHero2 relative ${className}`}
      data-nc-id="SectionHero2"
    >
      <div className="absolute inset-y-0 w-5/6 xl:w-3/4 right-0 flex-grow">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={imagePng}
          alt="hero"
        />
      </div>
      <div className="relative py-14 lg:py-20">
        <div className="relative inline-flex">
          <div className="w-screen right-20 md:right-0 inset-y-0 absolute  card dark:bg-neutral-900" style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}></div>
          <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-5 pr-3 sm:py-20 lg:py-24 space-y-8 sm:space-y-10 text-white">
            {children ? (
              children
            ) : (
              <>
                <h4 className="font-semibold md:text-5xl !leading-[110%]">
                  <span className="text-info">Lets find</span> <br /> <span className="text-primary">yours dream..</span>
                </h4>
                <p style={{ color: "black" }}>Building award winning properties across London
                  <br />
                  UK and the All world
                </p>
              </>
            )}
          </div>
        </div>
        <div className="hidden lg:block lg:mt-20 w-full">
          <HeroRealEstateSearchForm />
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
