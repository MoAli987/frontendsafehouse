import { Tab } from "@headlessui/react";

import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import React, { FC, Fragment, useState } from "react";
import React, { FC, useState, useEffect } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SocialsList from "shared/SocialsList/SocialsList";
import { Helmet } from "react-helmet";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";
import { Link } from "react-router-dom";

export interface AuthorPageProps {
  className?: string;
}

const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {
  const interfacedata = {
    data: {
      about
        :
        "-",
      address
        :
        "-",
      createdAt
        :
        "",
      email
        :
        "",
      image
        :
        "",
      name
        :
        "",
      password
        :
        "",
      phone
        :
        "-",
      serviceType
        :
        1,
      statusProfile
        :
        0,
      updatedAt
        :
        "",
      __v
        :
        0,
      _id
        :
        "",
    },
    message: "",
    status: "",
    token: ""
  }

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
  const [statusLogin, setStatusLogin] = useState(interfacedata);
  const [imagelink, setImagelink] = useState("")
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const getdataLocal = async () => {
    const getdatas = localStorage.getItem('data');
    if (getdatas) {
      const items = await JSON.parse(getdatas ? getdatas : "");
      if (items) {
        setStatusLogin(items);
        fecthApiData(items.data._id)
        // alert("dataset")
        if (items.data.image != "-") {
          setImagelink(`http://localhost:3000/images/${items.data.image}`)
          // alert("image load")
        }
      } else {
        setStatusLogin(interfacedata);
        alert("emp")
      }

    } else {
      setStatusLogin(interfacedata);
      // alert("emp")
    }

  }



  const fecthApiData = async (id: any) => {
    // alert(id)
    const dataId = { userID: id }
    const res = await axios.post("http://localhost:3000/api/property/getPropertyByUserID", dataId)
      .then((response) => {

        setData(response.data.data)

      }).catch((error) => {
        console.log("error")
      })
  }

  useEffect(() => {
    // alert('s')
    getdataLocal()


  }, []);
  function deleteFunction(id: any) {
    // const deleteId = {
    //   _id: id
    // }
    const res = axios.delete(`http://localhost:3000/api/property/deleteProperty/${id}`)
      .then((response) => {
        fecthApiData(statusLogin.data._id)
        setOpen(true);
        setMessage(response.data.message)
        // fecthApiData()

      }).catch((error) => {
        console.log(error)
      })
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const renderSidebar = () => {
    return (
      <div className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
        <Avatar
          hasChecked
          hasCheckedClass="w-6 h-6 -top-0.5 right-2"
          sizeClass="w-28 h-28"
          imgUrl={`http://localhost:3000/images/${statusLogin.data.image}`}
        />

        {/* ---- */}
        <div className="space-y-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">{statusLogin.data.name}</h2>
        </div>

        {/* ---- */}
        <p className="text-neutral-500 dark:text-neutral-400">
          {statusLogin.data.about}
        </p>
        {/* ---- */}
        <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

        {/* ---- */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              {statusLogin.data.address != "-" ? statusLogin.data.address : "------"}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              {statusLogin.data.email != "-" ? statusLogin.data.email : "------"}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              {statusLogin.data.phone != "-" ? statusLogin.data.phone : "------"}
            </span>
          </div>
        </div>
      </div>
    );
  };





  return (
    <div className={`nc-AuthorPage ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Account</title>
      </Helmet>
      <main className="container mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
          <div className="row">
            {data.length != 0 ? data.map((stay) => (
              <>
                <div className="col-md-6">
                  <br />

                  <div className="card">

                    <Link to={`/property-detail/${stay._id}`}>
                      <PropertyCardH key={stay._id} data={stay} />
                    </Link>
                    <hr />
                    <table>
                      <tr>
                        <td>
                          <Link to={`/edit-listing/${stay._id}`} style={{ fontSize: "30px", width: "100%" }}
                            // value={stay._id}
                            // onClick={() => {
                            //   deleteFunction(stay._id)
                            // }}
                            className="btn btn-sm btn-info text-white"><i className="las la-edit"></i></Link>
                        </td>
                        <td>
                          <button onClick={() => {
                            deleteFunction(stay._id)
                          }}
                            style={{ fontSize: "30px", width: "100%" }} className="btn btn-sm btn-danger"><i className="las la-trash"></i></button>
                        </td>

                      </tr>
                    </table>
                  </div>
                </div>
              </>
            )) : <>
              <div className="alert alert-primary" role="alert">
                Record No Found!
              </div>
            </>}
          </div>

        </div>
      </main>
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

export default AuthorPage;
