import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import axios from 'axios'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export interface PageSignUpProps {
  className?: string;
}


const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const interfaceData = {
    name: "",
    password: "",
    email: "",
    serviceType: "1"
  }
  const [data, setData] = useState(interfaceData);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severitytype, setSeverity] = React.useState("");

  const handleClick = () => {

  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const submitRegister = async () => {
    // alert("done")
    // console.log("d")
    const res = axios.post("http://localhost:3000/api/user/registration", data)
      .then((response) => {

        // setData(response.data)
        setOpen(true);
        console.log(response.data.message[0].message)
        if (response.data.message[0].message) {
          setMessage(response.data.message[0].message)
          setData(interfaceData);
        }
         else {
          setMessage(response.data.message)
          setData(interfaceData);
        }



        console.log(response.data.message)

      }).catch((error) => {
        setOpen(true);
        setMessage(error.response.data.message)
        setData(interfaceData);
        // console.log(error.response.data.message)
      })
  }

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div className="row container">
        <div className="col-md-6">
          <img src={require('./../../images/bg.jpg')} alt="" style={{ height: "70vh" }} />

        </div>
        <div className="col-md-6">
          <div className="container mb-24 lg:mb-32">
            <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              Signup
            </h2>
            <div className="max-w-md mx-auto space-y-6 ">

              {/* FORM */}
              <div className="grid grid-cols-1 gap-6">

                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">
                    Name
                  </span>
                  <Input
                    type="text"
                    placeholder="Donna simth"
                    className="mt-1"
                    name="name"
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, "name": e.target.value })
                    }}
                  />
                </label>
                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">
                    Email address
                  </span>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    name="email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, "email": e.target.value })
                    }}
                  />
                </label>
                <label className="block">
                  <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                    Password
                  </span>
                  <Input type="password" className="mt-1" name="password" value={data.password}
                    onChange={(e) => {
                      setData({ ...data, "password": e.target.value })
                    }}
                  />
                </label>
                <ButtonPrimary type="submit" onClick={submitRegister}>Register</ButtonPrimary>
              </div>

              {/* ==== */}
              <span className="block text-center text-neutral-700 dark:text-neutral-300">
                Already have an account? {` `}
                <Link to="/login">Sign in</Link>
              </span>
            </div>
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
    </div>
  );
};

export default PageSignUp;
