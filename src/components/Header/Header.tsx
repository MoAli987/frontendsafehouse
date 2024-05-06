import React, { FC } from "react";
import MainNav2 from "./MainNav2";



const Header =()=> {


  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg`}
    >
       <MainNav2 />
    </div>
  );
};

export default Header;
