import Label from "components/Label/Label";
// import React, { FC } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import axios from 'axios'
import CommonLayout from "./CommonLayout";
import { Helmet } from "react-helmet";
import React, { FC, useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export interface AccountPageProps {
  className?: string;
}

const AccountPage: FC<AccountPageProps> = ({ className = "" }) => {
  const interfacedata = {
    data: {
      about: "-",
      address: "-",
      email: "",
      image: "",
      name: "",
      password: "",
      phone: "demo",
      serviceType: 1,
      statusProfile: 0,
      _id: "",
    },
    message: "",
    status: "",
    token: ""
  }
  const [file, setFile] = useState("");
  const inputclass = "block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900";
  const [dataPro, setDataPro] = useState({
    about: "-",
    address: "-",
    email: "",
    name: "",
    phone: "",
    statusProfile: "0",
    _id: "",
  })
  const [statusLogin, setStatusLogin] = useState(interfacedata);
  const [imagelink, setImagelink] = useState(`http://localhost:3000/images/${statusLogin.data.image}`)
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [imageSend, setImageSend] = React.useState<File | string>('fileurl');

  const getdataLocal = async () => {
    const getdatas = localStorage.getItem('data');
    if (getdatas) {
      const items = await JSON.parse(getdatas ? getdatas : "");
      if (items) {
        setStatusLogin(items);
        setDataPro(items.data)
        console.log(items.data.address
        )
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
  useEffect(() => {
    // alert('s')
    getdataLocal()
    console.log(imageSend == "fileurl" ? "f" : "g")
  }, []);

  function updateProfile() {
    // alert("d")
    let formData = new FormData();    //formdata object
    if (imageSend != "fileurl") {
      formData.append('image', imageSend);
    }

    formData.append('name', dataPro.name);   //append the values with key, value pair
    formData.append('about', dataPro.about);
    formData.append('address', dataPro.address);

    formData.append('phone', dataPro.phone);
    formData.append('email', dataPro.email);
    formData.append('statusProfile', dataPro.statusProfile);
    formData.append('user_id', dataPro._id);

    const res = axios.post("http://localhost:3000/api/user/editprofile", formData)
      .then((response) => {
        // alert("call")
        localStorage.setItem('data', JSON.stringify(response.data));
        setStatusLogin(response.data.data)
        window.location.href = "/account";
        setOpen(true);
        console.log(response)
        setMessage(response.data.message)

      }).catch((error) => {
        // setOpen(true);
        // setMessage(error.response.message)
        // alert("e")
        console.log(error)
      })


  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const imageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    console.log(event.target.files);
    const selectedFiles = event.target.files as FileList;
    console.log(selectedFiles)
    setImageSend(selectedFiles?.[0])
    setImagelink(URL.createObjectURL(selectedFiles?.[0]));
  }
  return (
    <div className={`nc-AccountPage ${className}`} data-nc-id="AccountPage">
      <Helmet>
        <title>Account</title>
      </Helmet>
      <CommonLayout>
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Account infomation</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-start">
              <div className="relative rounded-full overflow-hidden flex">
                <Avatar sizeClass="w-32 h-32" imgUrl={imagelink} />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mt-1 text-xs">Change Image</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={imageUpload}
                />
              </div>
            </div>
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
              <div>
                <Label>Name</Label>
                <input
                  required
                  type={"text"}
                  value={dataPro?.name}
                  className={inputclass}
                  placeholder="Name"

                  onChange={(e) => {
                    setDataPro({ ...dataPro, "name": e.target.value })
                  }}
                />

              </div>

              <div>
                <Label>Email</Label>
                <input
                  required
                  type={"email"}
                  value={dataPro?.email}
                  className={inputclass}
                  placeholder="Email"

                  disabled

                />

              </div>

              <div>
                <Label>Address</Label>
                <input
                  required
                  type={"text"}
                  value={dataPro?.address}
                  className={inputclass}
                  placeholder="Address"

                  onChange={(e) => {
                    setDataPro({ ...dataPro, "address": e.target.value })
                  }}
                />
              </div>
              {/* ---- */}
              <div>
                <Label>Phone number</Label>
                <input
                  required
                  type={"text"}
                  value={dataPro?.phone}
                  className={inputclass}
                  placeholder="Phone Number"

                  onChange={(e) => {
                    setDataPro({ ...dataPro, "phone": e.target.value })
                  }}
                />

              </div>
              {/* ---- */}
              <div>
                <Label>About you</Label>
                <textarea required
                  value={dataPro?.about}
                  rows={5}
                  className={inputclass}
                  placeholder="About you"
                  style={{ borderRadius: "0px" }}
                  onChange={(e) => {
                    setDataPro({ ...dataPro, "about": e.target.value })
                  }}
                >

                </textarea>
              </div>
              <div className="pt-2">
                <ButtonPrimary onClick={updateProfile}>Update info</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
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

export default AccountPage;
