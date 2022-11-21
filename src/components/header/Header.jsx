import React from "react";
import "./Header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="main-header">
      {/* <form className="bar-search">
        <div className="circle-icon">
          <a href="/">
            <CiSearch className="icon-information" />
          </a>
        </div>
        <input className="form-control input-search "></input>
      </form> */}
      <div className="bar-information-user">

        <div className="circle-icon">
          <a href="/">
            <AiOutlineMessage className="icon-information" />
          </a>
        </div>

        <div className="circle-icon">
          <a href="/">
            <IoMdNotificationsOutline className="icon-information" />
          </a>
        </div>
        <a className="none-decoration" href="/">
          <img src={require("../../assets/images/avartar/avartar.jpg")}></img>
        </a>
        <a href="/" className="none-decoration">Trợ giúp ?</a>
      </div>
    </div>
  );
};

export default Header;
