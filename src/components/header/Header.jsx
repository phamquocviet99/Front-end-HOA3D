import React from "react";
import "./Header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div className="main-header">
      <div className="navbar-information">
        <a href="/trang-nha-vuon">
          <p>Trang chủ</p>
        </a>
        <a href="/trang-nha-vuon">
          <p>Sản phẩm</p>
        </a>
       
      </div>
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
        <a href="/" className="none-decoration">
          Trợ giúp ?
        </a>
      </div>
    </div>
  );
};

export default Header;
