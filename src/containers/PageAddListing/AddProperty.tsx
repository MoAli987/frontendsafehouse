import React, { useState, useEffect } from "react";
import { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Heading from "shared/Heading/Heading";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import axios from 'axios'
const CommonLayout = ({

}) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const interfaceData = {
    userID: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    propertyName: "",
    bedRoom: "",
    bathRoom: "",
    areaSquareFeet: "",
    propertyAdditionalInformation: "",
    propertyDescription: "",
    propertyPrice: "",
    propertyCity: "",
    propertyState: "",
    propertyAddress: "",
    propertyLatitude: "",
    propertyLongitude: "",
    postalCode: "",
    typefor: "",
    propertyStatus: "",
    propertyImgage: []

  }
  const getdataLocal = async () => {
    const getdatas = localStorage.getItem('data');
    if (getdatas) {
      const items = await JSON.parse(getdatas ? getdatas : "");
      if (items) {
        setData({ ...data, "userID": items.data._id });
        console.log(items.data.address
        )


      } else {

        alert("emp item")
      }

    } else {

      alert("emp")
    }

  }
  useEffect(() => {
    // alert('s')
    getdataLocal()
  }, []);
  const [imageFiles, setimageFiles] = useState()
  const [data, setData] = useState(interfaceData)
  const [imageUpload, setImageUpload] = React.useState<File | string>('fileurl');
  const [imageUpload1, setImageUpload1] = React.useState<File | string>('fileurl');
  const [imageUpload2, setImageUpload2] = React.useState<File | string>('fileurl');
  const inputclass = "block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900";
  function submitProperty() {
    let formData = new FormData();    //formdata object

    formData.append('userID', data.userID)
    formData.append('ownerEmail', data.ownerEmail)
    formData.append('ownerName', data.ownerName)
    formData.append('ownerPhone', data.ownerPhone)
    formData.append('propertyName', data.propertyName)
    formData.append('bedRoom', data.bedRoom)
    formData.append('bathRoom', data.bathRoom)
    formData.append('areaSquareFeet', data.areaSquareFeet)
    formData.append('propertyAdditionalInformation', data.propertyAdditionalInformation)
    formData.append('propertyDescription', data.propertyDescription)
    formData.append('propertyPrice', data.propertyPrice)
    formData.append('propertyCity', data.propertyCity)
    formData.append('propertyState', data.propertyState)
    formData.append('propertyAddress', data.propertyAddress)
    formData.append('propertyLatitude', data.propertyLatitude)
    formData.append('propertyLongitude', data.propertyLongitude)
    formData.append('postalCode', data.postalCode)
    formData.append('typefor', data.typefor)
    formData.append('propertyStatus', data.propertyStatus)
    formData.append('propertyImgage', imageUpload2)
    formData.append('propertyImgage', imageUpload)
    formData.append('propertyImgage', imageUpload1)


    const res = axios.post("http://localhost:3000/api/property/addProperty", formData)
      .then((response) => {

        // setData(response.data.data)
        setOpen(true);
        console.log(response.data)
        setMessage(response.data.message)




      }).catch((error) => {
        // setOpen(true);
        // setMessage(error.response.message)
        console.log(error)
      })

  }


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const imageUploadHandel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    console.log(event.target.files);
    const selectedFiles = event.target.files as FileList;
    console.log(selectedFiles)
    setImageUpload(selectedFiles?.[0])
    setImageUpload1(selectedFiles?.[1])
    setImageUpload2(selectedFiles?.[2])

  }
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing1"
    >
      <Heading desc="Please fill all input fileds*">
        Add Property
      </Heading>
      <div className="space-y-11">

        <input
          required
          type={"text"}
          className={inputclass}
          placeholder="Property Name"
          value={data.propertyName}
          onChange={(e) => {
            setData({ ...data, "propertyName": e.target.value })
          }}
        />

        <select
          className={`nc-Select block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900`}
          value={data.propertyStatus}
          onChange={(e) => {
            setData({ ...data, "propertyStatus": e.target.value })
          }}
        >
          <option selected>Select For Purpose</option>
          <option value={"Buy"}>Sell</option>
          <option value={"Rent"}>Rent</option>
        </select>

        <select
          className={`nc-Select block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900`}
          value={data.typefor}
          onChange={(e) => {
            setData({ ...data, "typefor": e.target.value })
          }}
        >
          <option selected>Select Property Type</option>
          <option value={"Nature House"}>Nature House</option>
          <option value={"Wooden"}>Wooden</option>
          <option value={"Apartment"}>Apartment</option>
          <option value={"Farm House"}>Farm House</option>
          <option value={"Dome  House"}>Dome  House</option>
        </select>


        <input
          required
          value={data.ownerName}
          onChange={(e) => {
            setData({ ...data, "ownerName": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Owner Name"
        />



        <input
          required
          value={data.ownerEmail}
          onChange={(e) => {
            setData({ ...data, "ownerEmail": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Owner Email"
        />

        <input
          required
          value={data.ownerPhone}
          onChange={(e) => {
            setData({ ...data, "ownerPhone": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Owner Phone"
        />

        <input
          required
          value={data.bedRoom}
          onChange={(e) => {
            setData({ ...data, "bedRoom": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Bed Room"
        />

        <input
          required
          value={data.bathRoom}
          onChange={(e) => {
            setData({ ...data, "bathRoom": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Bath Room"
        />

        <input
          required
          value={data.areaSquareFeet}
          onChange={(e) => {
            setData({ ...data, "areaSquareFeet": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Area Square Feet"
        />

        <input
          required
          value={data.propertyPrice}
          onChange={(e) => {
            setData({ ...data, "propertyPrice": e.target.value })
          }}
          type={"number"}
          className={inputclass}
          placeholder="Property Price"
        />

        <input
          required
          value={data.propertyCity}
          onChange={(e) => {
            setData({ ...data, "propertyCity": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Property City"
        />

        <input
          required
          value={data.propertyState}
          onChange={(e) => {
            setData({ ...data, "propertyState": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Property State"
        />

        <input
          required
          value={data.propertyAddress}
          onChange={(e) => {
            setData({ ...data, "propertyAddress": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Property Address"

        />

        <input
          required
          value={data.propertyLatitude}
          onChange={(e) => {
            setData({ ...data, "propertyLatitude": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Property Latitude"
        />

        <input
          required
          value={data.propertyLongitude}
          onChange={(e) => {
            setData({ ...data, "propertyLongitude": e.target.value })
          }}
          type={"text"}
          className={inputclass}
          placeholder="Property Longitude"
        />

        <input
          required
          value={data.postalCode}
          onChange={(e) => {
            setData({ ...data, "postalCode": e.target.value })
          }}
          type={"number"}
          className={inputclass}
          placeholder="Posta lCode"
        />


        <textarea required
          value={data?.propertyDescription}
          rows={5}
          className={inputclass}
          placeholder="Description"
          style={{ borderRadius: "0px" }}
          onChange={(e) => {
            setData({ ...data, "propertyDescription": e.target.value })
          }}
        >

        </textarea>

        <textarea required
          value={data?.propertyAdditionalInformation}
          rows={5}
          className={inputclass}
          placeholder="Additional Information"
          style={{ borderRadius: "0px" }}
          onChange={(e) => {
            setData({ ...data, "propertyAdditionalInformation": e.target.value })
          }}
        >

        </textarea>

        <label htmlFor="image"> Select Image</label>
        <input
          // required
          // value={data.propertyImgage}
          onChange={imageUploadHandel}
          type={"file"}
          className={inputclass}
          placeholder="Images"
          id="image"
          multiple
        />

        <center>
          <ButtonPrimary type="submit" onClick={submitProperty}>Submit</ButtonPrimary>
        </center>



      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CommonLayout;
