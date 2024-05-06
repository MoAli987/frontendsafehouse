import React, { FC, useEffect } from "react";
import { PropertyDataType, StayDataType } from "data/types";
import Heading2 from "components/Heading/Heading2";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";
import axios from 'axios'
import { Link } from "react-router-dom";
export interface SectionGridFilterCardProps {
  className?: string;
  data?: PropertyDataType;
  urlApi?:string;
}

// const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  // data = DEMO_DATA,
  urlApi=""
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
    // alert(urlApi)
    const res = axios.get(urlApi)
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
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="Property"
        subHeading={
          "Lisit of property"
        }
      />


      <div className="row">
        {data.length != 0 ? data.map((stay) => (
          <>
            <div className="col-md-4">
              <Link to={`/property-detail/${stay._id}`}>
                <PropertyCardH key={stay._id} data={stay} />
              </Link>
            </div>
          </>
        )) : <>
          <div className="alert alert-primary" role="alert">
            Yet No Avaliable Property
          </div>
        </>}
      </div>

    </div>
  );
};

export default SectionGridFilterCard;
