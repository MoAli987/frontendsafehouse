import React, { FC, ReactNode, useEffect } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { PropertyDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Heading from "shared/Heading/Heading";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";
import axios from 'axios'
import { Link } from "react-router-dom";
// OTHER DEMO WILL PASS PROPS
// const DEMO_DATA: PropertyDataType = DEMO_STAY_LISTINGS.filter((_, i) => i < 3);
//
export interface SectionGridFeaturePropertyProps {
  stayListings?: PropertyDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that Chisfis recommends for you",
}) => {

  const [data, setData] = React.useState([{
    _id: "",
    userID: "",
    ownerEmail: "",
    ownerPhone: "",
    propertyName: " ",
    bedRoom: "",
    areaSquareFeet: "",
    propertyAdditionalInformation: "",
    propertyDescription: "",
    propertyPrice: 0,
    propertyCity: "",
    propertyState: "",
    propertyAddress: "",
    propertyLatitude: "",
    propertyLongitude: "",
    postalCode: 0,
    typefor: "",
    propertyStatus: "",
    propertyImgage: [
      "",
      ""
    ],
    bathRoom: "1"
  }]);
  const fecthApiDataCrime = async () => {
    // console.log("d")
    const res = axios.get("http://localhost:3000/api/property/viewPropertyRandom")
      .then((response) => {

        setData(response.data.data)

      }).catch((error) => {
        console.log("error")
      })
  }
  useEffect(() => {
    fecthApiDataCrime()
    console.log(data)
    // console.log(DEMO_DATA)
  }, [])
  const renderCard = (stay: PropertyDataType, index: number) => {
    return <>
      <div className="col-md-4">
        {/* <PropertyCardH key={index} className="h-full" data={stay} /> */}
        <Link to={`/property-detail/${stay._id}`}>
          <PropertyCardH key={stay._id} data={stay} />
        </Link>
      </div>
    </>;
  };

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <div className="flex flex-col mb-8 relative">
        <Heading desc={subHeading}>{heading}</Heading>

      </div>
      <div
        className={`row`}
      >
        {data.map(renderCard)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Link to={"/property"}>
          <ButtonPrimary>Show me more</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
