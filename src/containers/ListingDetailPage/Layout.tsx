import React, { ReactNode } from "react";
import { imageGallery as listingStayImageGallery } from "./listing-stay-detail/constant";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ListingImageGallery from "components/ListingImageGallery/ListingImageGallery";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";


const DetailPagetLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="ListingDetailPage">
     

      <div className="container ListingDetailPage__content">{children}</div>

      {/* OTHER SECTION */}
      <div className="container py-24 lg:py-32">
        <div className="relative py-16">
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            uniqueClassName="ListingDetailPage"
          />
        </div>
       
      </div>

    
    </div>
  );
};

export default DetailPagetLayout;
