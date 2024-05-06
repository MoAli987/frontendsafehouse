import React, { FC, useEffect, useState } from "react";

import StartRating from "components/StartRating/StartRating";
import Avatar from "shared/Avatar/Avatar";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Amenities_demos, PHOTOS } from "./constant";

import ButtonSecondary from "shared/Button/ButtonSecondary";
import GoogleMapReact from 'google-map-react';
import DetailPagetLayout from "../Layout";
import { useParams } from "react-router-dom";

import axios from 'axios'
const AnyReactComponent = () => <div>text</div>;
export default function ListingStayDetailPage() {
  const params = useParams();
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const [data, setData] = React.useState({
    _id: "",
    userID: {
      _id: "",
      name: "",
      about: "",
      image: "",
    },
    ownerName: "",
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
  });


  const [dataCrime, setDataCrime] = React.useState([{
    category: "",
    location_type: "",
    location: {
      latitude: "",
      street: {
        id: 0,
        name: ""
      },
      longitude: ""
    },
    context: "",
    outcome_status: {
      category: "",
      date: ""
    },
    persistent_id: "",
    id: 0,
    location_subtype: "",
    month: ""
  }]);

  const fecthApiData = async () => {
    // console.log("d")
    const dataSend = {
      _id: params.id
    }
    const res = await axios.post("http://localhost:3000/api/property/getPropertyByID", dataSend)
      .then((response) => {

        setData(response.data.data[0])
        console.log(response.data.data)
        searchFunction(response.data.data[0].propertyLatitude, response.data.data[0].propertyLongitude)

      }).catch((error) => {
        console.log("error")
      })
  }
  useEffect(() => {
    fecthApiData()
    console.log(data)
    // console.log(DEMO_DATA)
  }, [])

  const searchFunction = async (_lat: any, _lng: any) => {
    const res = await axios.get(`https://data.police.uk/api/crimes-at-location?&lat=${_lat}&lng=${_lng}`)
      .then((response) => {

        setDataCrime(response.data)
        // console.log(response.data)

      }).catch((error) => {
        console.log("error")
      })
  }

  return (
    <DetailPagetLayout>
      <div className="nc-ListingStayDetailPage">
        {/*  HEADER */}
        <header className="rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden "

            >
              <img
                className="absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
                src={`http://localhost:3000/images/${data.propertyImgage[0]}`}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {data.propertyImgage.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 3 ? "hidden sm:block" : ""
                  }`}
              >
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <img
                    className="absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full"
                    src={`http://localhost:3000/images/${item}` || ""}
                    alt=""
                    sizes="400px"
                  />
                </div>

                {/* OVERLAY */}

              </div>
            ))}


          </div>
        </header>

        {/* MAIN */}
        <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
          {/* CONTENT */}
          <div className="row">
            <div className="listingSection__wrap !space-y-6">
              {/* 1 */}


              {/* 2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {data.propertyName ? data.propertyName : "Demo Name"}
              </h2>

              {/* 3 */}


              {/* 4 */}
              <div className="flex items-center">
                <Avatar sizeClass="h-10 w-10" radius="rounded-full" imgUrl={`http://localhost:3000/images/${data.userID.image != undefined ? data.userID.image : ""}`} />
                <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
                  Owner Name{" "}
                  <span className="text-neutral-900 dark:text-neutral-200 font-medium">
                    {data.userID.name ? data.ownerName : ""}
                  </span>
                </span>
                <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
                  <a href={`mailto:${data.ownerEmail}`}>
                    <i className="las la-envelope"></i>
                  </a>
                  {" "}
                  <a href={`tel:${data.ownerPhone}`}>
                    <i className="las la-phone-volume"></i>
                  </a>
                </span>


              </div>

              {/* 5 */}
              <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

              {/* 6 */}
              <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">

                <div className="flex items-center space-x-3">
                  <i className=" las la-bed text-2xl"></i>
                  <span className=" ">
                    {data?.bedRoom} <span className="hidden sm:inline-block">bed Room</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className=" las la-bath text-2xl"></i>
                  <span className=" ">
                    {data?.bedRoom} <span className="hidden sm:inline-block">baths</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="listingSection__wrap">
              <h2 className="text-2xl font-semibold">Description</h2>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
              <div className="text-neutral-6000 dark:text-neutral-300">
                {data?.propertyDescription}
              </div>
            </div>


            <div className="listingSection__wrap mt-5">
              <div>
                <h2 className="text-2xl font-semibold">Additional Information </h2>

              </div>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
              {/* 6 */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
                {data?.propertyAdditionalInformation}
              </div>
            </div>


            <div className="listingSection__wrap mt-5">
              {/* HEADING */}
              <h2 className="text-2xl font-semibold">Host Information</h2>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

              {/* host */}
              <div className="flex items-center space-x-4">
                <Avatar
                  hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
                  sizeClass="h-14 w-14"
                  radius="rounded-full"
                  imgUrl={`http://localhost:3000/images/${data.userID.image != undefined ? data.userID.image : ""}`}
                />
                <div>
                  <a className="block text-xl font-medium" href="">
                    {data.userID.name ? data.userID.name : ""}
                  </a>
                </div>
              </div>

              {/* desc */}
              <span className="block text-neutral-6000 dark:text-neutral-300">
                {data?.userID.about}
              </span>




              {/* == */}
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

            </div>

            <div className="listingSection__wrap mt-5">
              {/* HEADING */}
              <div>
                <h2 className="text-2xl font-semibold">Location</h2>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {data?.propertyAddress}
                </span>
              </div>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

              {/* MAP */}
              <div className=" ring-1 ring-black/10 rounded-xl z-0">
                <div className="rounded-xl overflow-hidden z-0">
                  <iframe
                    src={`https://maps.google.com/maps?q=${data?.propertyLatitude},${data?.propertyLongitude}&z=16&output=embed`}
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google map"
                  ></iframe>
                </div>
              </div>
            </div>



            <div className="listingSection__wrap mt-5">
              {/* HEADING */}
              <div>
                <h2 className="text-2xl font-semibold">Crime Record</h2>

              </div>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

              {/* MAP */}
              <div className=" ring-1 ring-black/10 rounded-xl z-0">
                <div className='container mt-5'>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>User ID's</StyledTableCell>
                          <StyledTableCell >Category</StyledTableCell>
                          <StyledTableCell >Category Status</StyledTableCell>
                          <StyledTableCell >Location</StyledTableCell>
                          <StyledTableCell >Date</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dataCrime.map((row) => (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                              <span className="badge badge-primary bg-primary">{row.id}</span>
                            </StyledTableCell>
                            <StyledTableCell >{row.category}</StyledTableCell>

                            <StyledTableCell >{row.outcome_status?.category}</StyledTableCell>
                            <StyledTableCell >{row.location.street.name}</StyledTableCell>
                            <StyledTableCell >{row.month}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                </div>
              </div>
            </div>

          </div>

          {/* SIDEBAR */}

        </main>
      </div>

    </DetailPagetLayout>
  );
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));