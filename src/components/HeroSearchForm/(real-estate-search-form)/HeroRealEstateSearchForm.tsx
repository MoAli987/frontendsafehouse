"use client";

import React, { FC, useState } from "react";
import RealEstateSearchForm from "./RealEstateSearchForm";

export type SearchRealEstateTab = "Buy" | "Rent";

export interface HeroRealEstateSearchFormProps {
  className?: string;
  currentTab?: SearchRealEstateTab;
}

const HeroRealEstateSearchForm: FC<HeroRealEstateSearchFormProps> = ({
  className = "",
  currentTab = "Buy",
}) => {
  

  return (
    <div
      className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
     
      <RealEstateSearchForm />    </div>
  );
};

export default HeroRealEstateSearchForm;
