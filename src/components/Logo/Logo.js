import React from "react";
import logo from "../../assets/images/Logo.png";

const Logo = ({ size }) => {
  return <img src={logo} alt="Logo" width={size} height={size} />
};

export default Logo;
