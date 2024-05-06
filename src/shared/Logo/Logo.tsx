import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.png";
import logoLightImg from "images/logo-light.png";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
     <img src={require('./../../images/logo.png')}></img>
    </Link>
  );
};

export default Logo;
