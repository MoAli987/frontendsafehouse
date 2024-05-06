import React, { FC, useState, useEffect } from "react";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import LangDropdown from "./LangDropdown";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./Navbar";
import CurrencyDropdown from "./CurrencyDropdown";
import Navbar from "./NavbarItem";
import { Link } from "react-router-dom";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
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
  const [imagelink, setImagelink] = useState("http://localhost:3000/images/image_1711660705946.jpg")

  const getdataLocal =async()=>{
    const getdatas =  localStorage.getItem('data');
      if (getdatas) {
        const items =await JSON.parse(getdatas ? getdatas : "");
        if (items) {
          setStatusLogin(items);
          // alert("dataset")
          if (items.data.image != "-") {
            setImagelink(`http://localhost:3000/images/${items.data.image}`)
            // alert("image load")
          }
        } else {
          setStatusLogin(interfacedata);
          alert("emp")
        }

      }else{
        setStatusLogin(interfacedata);
          // alert("emp")
      }

  }
  useEffect(() => {
    // alert('s')
    getdataLocal()

  }, []);
  return (
    <div className={`nc-MainNav1 nc-MainNav2 relative z-10 ${className}`}>
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex justify-center flex-1 items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <div className="hidden lg:block">
            <Navbar contenttext={"Home"} link={"/"} />
          </div>
          <div className="hidden lg:block">
            <Navbar contenttext={"Property"} link={"/property"} />
          </div>
          <div className="hidden lg:block">
            <Navbar contenttext={"Crime Report"} link={"/crimereport"} />
          </div>
          <div className="hidden lg:block">
            <Navbar contenttext={"Contact Us"} link={"/contact"} />
          </div>

        </div>

        <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden items-center lg:flex space-x-1">

            {statusLogin.token != "" ? (<>
              <Link
                to="/add-listing"
                className="
                text-opacity-90
                group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                List your property
              </Link>

              <div></div>
              <div className="pr-1.5">
                <NotifyDropdown className="-ml-2 xl:-ml-1" />
              </div>
              <div className="pr-1.5">
                {statusLogin?.data.name}
              </div>
              {/* <SwitchDarkMode /> */}

              <AvatarDropdown profileImageUrl={imagelink} />
            </>) : (<>
              <Link
                to="/login"
                className="text=info btn"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className=" btn btn-primary"
              >
                Register
              </Link>
            </>)
            }
          </div>
          <div className="flex items-center space-x-2 lg:hidden">
            <NotifyDropdown />
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
