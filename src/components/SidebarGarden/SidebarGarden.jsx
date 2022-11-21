import { Children, React, useState } from "react";
import "./Sidebar.css";
import { motion, AnimatePresence } from "framer-motion";
import { GrCreditCard } from "react-icons/gr";
import { BiBox, BiBarChartSquare, BiFoodMenu } from "react-icons/bi";
import { GoCreditCard } from "react-icons/go";
import { TbDatabaseExport } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import { TbApps } from "react-icons/tb";
import SideBarMenu from "./SideBarMenu";
// const routes = [
//   {
//     path: "/trang-nha-vuon/trang-chu",
//     name: "Trang chủ",
//     icon: <BiHomeSmile />,
//   },
//   {
//     path: "/trang-nha-vuon/san-pham",
//     name: "Tất cả sản phẩm",
//     icon: <BiHomeSmile />,
//   },
//   {
//     path: "/trang-nha-vuon/san-luong",
//     name: "Sản lượng hiện có",
//     icon: <BiHomeSmile />,
//   },
//   {
//     path: "/trang-nha-vuon/don-hang",
//     name: "Tất cả đơn hàng",
//     icon: <MdPieChart />,
//   },
//   {
//     icon: <BiGift />,
//     path: "/trang-nha-vuon/doanh-thu",
//     name: "Doanh thu",
//   },
//   {
//     icon: <BiGift />,
//     path: "/trang-nha-vuon/ngan-hang",
//     name: "Tài khoản ngân hàng",
//   },
// ];

const SidebarGarden = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div
      className="main-container"
     
    >
      <motion.div
       onMouseEnter={toggle}
       onMouseLeave={toggle}
        className="sidebar"
        animate={{
          width: isOpen ? "330px" : "90px",
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 15,
          },
        }}
      >
        <div className="top_section">
          {isOpen ? (
            <a href="/trang-nha-vuon" className="logo mt-2">
              <img src={require("../../assets/images/logo/fmp.png")} />
            </a>
          ) : (
            <a href="/trang-nha-vuon" className="logo mt-2">
              <img src={require("../../assets/images/logo/logo2.png")} />
            </a>
          )}

          <div className="bars">
            <img
              src={require("../../assets/images/logo/icon_arrow.png")}
              className={isOpen ? "rotate180" : "rotate0"}
              // onClick={toggle}
            />
          </div>
        </div>

        <section className="routes">
          {/* DashBoard */}
          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/trang-chu"
            className="link none-decoration mt-4"
          >
            <div className="icon-sidebar">
              <TbApps />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Trang chủ
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>

          {/* All Product */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                <p className="line-title">Sản phẩm</p>
              </motion.div>
            )}
          </AnimatePresence>

          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/san-pham"
            className="link none-decoration"
          >
            <div className="icon-sidebar">
              <BiBox />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Tất cả sản phẩm
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
          {/* Quantity Product */}

          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/san-luong"
            className="link none-decoration"
          >
            <div className="icon-sidebar">
              <TbDatabaseExport />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Sản lượng hiện có
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
          {/* All Orders */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                <p className="line-title">Hóa đơn</p>
              </motion.div>
            )}
          </AnimatePresence>

          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/don-hang"
            className="link none-decoration"
          >
            <div className="icon-sidebar">
              <BiFoodMenu />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Tất cả đơn hàng
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
          {/* All Turnover */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <p className="line-title">Doanh thu</p>
              </motion.div>
            )}
          </AnimatePresence>

          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/doanh-thu"
            className="link none-decoration"
          >
            <div className="icon-sidebar">
              <BiBarChartSquare />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Doanh thu
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
          {/* All Bank */}
          <NavLink
            activeClassName="active"
            to="/trang-nha-vuon/ngan-hang"
            className="link none-decoration"
          >
            <div className="icon-sidebar">
              <GoCreditCard />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Tài khoản ngân hàng
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
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
