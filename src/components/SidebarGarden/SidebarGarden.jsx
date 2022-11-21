import { Children, React, useState } from "react";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaGifts, FaAngleDown } from "react-icons/fa";
import { BiHomeSmile, BiGift } from "react-icons/bi";
import { MdDoubleArrow, MdPieChart } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import SideBarMenu from "./SideBarMenu";
const routes = [
  {
    path: "/trang-nha-vuon/trang-chu",
    name: "Trang chủ",
    icon: <BiHomeSmile />,
  },
  {
    path: "/trang-nha-vuon/san-pham",
    name: "Tất cả sản phẩm",
    icon: <BiHomeSmile />,
  },
  {
    path: "/trang-nha-vuon/san-luong",
    name: "Sản lượng hiện có",
    icon: <BiHomeSmile />,
  },
  {
    name: "Quản lý đơn hàng",
    icon: <MdPieChart />,
    subRoutes: [
      {
        path: "/trang-nha-vuon/tat-ca-don-hang",
        name: "Tất cả đơn hàng",
      },
    ],
  },
  {
    name: "Quản lý tài chính",
    icon: <BiGift />,
    subRoutes: [
      {
        path: "/trang-nha-vuon/doanh-thu",
        name: "Doanh thu",
      },
      {
        path: "/trang-nha-vuon/ngan-hang",
        name: "Tài khoản ngân hàng",
      },
    ],
  },
];

const SidebarGarden = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      whiteSpace: "nowrap",
      transition: {
        duration: 0.2,
      },
      opacity: 0,
    },
    show: {
      opacity: 1,
      whiteSpace: "nowrap",
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        className="sidebar"
        animate={{
          width: isOpen ? "330px" : "100px",
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 15,
          },
        }}
      >
        <div className="top_section">
          {isOpen ? (
            <div className="logo mt-2">
              <img src={require("../../assets/images/logo/fmp.png")} />
            </div>
          ) : (
            <div className="logo mt-2">
              <img src={require("../../assets/images/logo/logo2.png")} />
            </div>
          )}

          <div className="bars">
            <MdDoubleArrow
              className={isOpen ? "rotate180" : "rotate0"}
              onClick={toggle}
            />
          </div>
        </div>
        <div className="line-sidebar"></div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SideBarMenu
                  showAnimation={showAnimation}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  route={route}
                  key={route.name}
                />
              );
            }
            return (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={index}
                className="link none-decoration"
              >
                <div className="icon-sidebar">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <div className="content-main-container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default SidebarGarden;
