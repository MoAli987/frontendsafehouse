import Label from "components/Label/Label";
import React, { useState, useEffect } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import CommonLayout from "./CommonLayout";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios'
const AccountPass = () => {
 
  const inputclass = "block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900";
 
  const [data, setData] = useState({
    _id: "",
    userPassword: "",
    confirmPassword: ""
  })


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
  const [statusLogin, setStatusLogin] = useState(interfacedata);
  const getdataLocal = async () => {
    const getdatas = localStorage.getItem('data');
    if (getdatas) {
      const items = await JSON.parse(getdatas ? getdatas : "");
      if (items) {
        setStatusLogin(items);
        setData({ ...data, "_id": items.data._id })
        // console.log(items.data._id)

      } else {
        setStatusLogin(interfacedata);

      }

    } else {
      setStatusLogin(interfacedata);
      // alert("emp")
    }

  }
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  function submitPassword() {
    if(data.userPassword!="" && data.confirmPassword!="")
      {
        if (data.userPassword == data.confirmPassword ) {
          passwordforgot()
        } else {
          setOpen(true);
          setMessage("Both Password Not Match")
        }
      }else{
        setOpen(true);
        setMessage("Password Filed Empty")
      }
  }


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    // alert('s')
    getdataLocal()


  }, []);
  const passwordforgot = async () => {
    // alert("done")
    // console.log("d")
    const res = axios.post("http://localhost:3000/api/user/forgotPassword", data)
      .then((response) => {

        // setData(response.data.data)
        setOpen(true);
        console.log(response.data.message)
        setMessage(response.data.message)



        // console.log(response.data.data.status)

      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <CommonLayout>
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Update your password</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className=" max-w-xl space-y-6">
            <div>
              <Label>New password</Label>
              <input
                required
                type={"password"}
                value={data.userPassword}
                className={inputclass}
                placeholder="New password"
                onChange={(e) => {
                  setData({ ...data, "userPassword": e.target.value })
                }}
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <input
                required
                type={"password"}
                className={inputclass}
                value={data.confirmPassword}
                placeholder="Confirm password"
                onChange={(e) => {
                  setData({ ...data, "confirmPassword": e.target.value })
                }}
              />
            </div>
            <div className="pt-2">
              <ButtonPrimary onClick={submitPassword}>Update password</ButtonPrimary>
            </div>
          </div>
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
      </CommonLayout>
    </div>
  );
};

export default AccountPass;
