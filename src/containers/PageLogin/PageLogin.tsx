import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import googleSvg from "images/Google.svg";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import axios from 'axios'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export interface PageLoginProps {
  className?: string;
}



const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const interfaceData = {
    password: "",
    email: "",
  }
  const [data, setData] = useState(interfaceData);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();
  const [severitytype, setSeverity] = React.useState("");

  const handleClick = () => {

  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const login = async () => {
    // alert("done")
    // console.log("d")
    const res = axios.post("http://localhost:3000/api/user/login", data)
      .then((response) => {

        // setData(response.data.data)
        setOpen(true);
        console.log(response.data.data.message)
        if (response.data.data.status=="401") {
          setMessage(response.data.data.message)
        }
        else {
          setMessage(response.data.data.message)
          localStorage.setItem('data', JSON.stringify(response.data.data));
          window.location.href = "/";
        }



        console.log(response.data.data.status)

      }).catch((error) => {
        // setOpen(true);
        // setMessage(error.response.message)
        console.log(error)
      })
  }
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={require('./../../images/bg.jpg')} alt="" style={{ height: "70vh" }} />
          </div>
          <div className="col-md-6">
            <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              Login
            </h2>
            <div className="max-w-md mx-auto space-y-6">


              {/* FORM */}
              <div className="grid grid-cols-1 gap-6" >
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
                    <Link to="/forgot-pass" className="text-sm">
                      Forgot password?
                    </Link>
                  </span>
                  <Input type="password" className="mt-1" name="password" value={data.password} onChange={(e) => {
                    setData({ ...data, "password": e.target.value })
                  }} />
                </label>
                <ButtonPrimary type="submit" onClick={login}>Login</ButtonPrimary>
              </div>

              {/* ==== */}
              <span className="block text-center text-neutral-700 dark:text-neutral-300">
                New user? {` `}
                <Link to="/signup">Create an account</Link>
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

export default PageLogin;
