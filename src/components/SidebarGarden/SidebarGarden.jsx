import { useEffect, Fragment, React, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiBox } from "react-icons/bi";

import { TbApps } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ButtonPosted from "../ButtonPosted/ButtonPosted";
import ButtonOnTop from "../ButtonOnTop/ButtonOnTop";

const SidebarGarden = ({ children }) => {
  const [isShowLogo, setIsShowLogo] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const sideBar = [
    {
      name: "Trang Chủ",
      link: "/nha-vuon/trang-chu",
      icon: <TbApps />,
    },
    {
      name: "Mua Bán",
      link: "/nha-vuon/mua-ban",
      icon: <BiBox />,
    },
    {
      name: "Sản Phẩm",
      link: "/nha-vuon/san-pham",
      icon: <BiBox />,
    },
    {
      name: "Đơn hàng",
      link: "/nha-vuon/don-hang",
      icon: <BiBox />,
    },

    {
      name: "Thông Tin",
      link: "/nha-vuon/nguoi-dung",
      icon: <HiOutlineUserCircle />,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleLogo = () => {
    if (window.scrollY >= 50) {
      setIsShowLogo(true);
    } else {
      setIsShowLogo(false);
    }
  };
  const handleResize = () => {
    setIsShowing(false);
  };

  window.addEventListener("scroll", handleLogo);
  window.addEventListener("resize", handleResize);
  return (
    <div className="relative">
      {isShowing ? (
        <div
          onClick={() => setIsShowing(false)}
          className="absolute z-20 flex justify-start background-side-phone h-full w-full  xl:hidden"
        >
          <div className="relative flex w-2/3 sm:3/5  md:w-1/3 back-ground-side pt-10 pb-6 h-full ">
            {/* <div className="flex justify-center max-w3/4 min-w-2/4 back-ground-side pt-10 pb-6 h-full "> */}
            <div className="w-full pl-3 pr-6">
              <div className="flex justify-between items-center px-2 w-full mb-4">
                <div className="flex items-center">
                  <a
                    href="/trang-nha-vuon"
                    className="flex-shrink-0 flex items-center"
                  >
                    <img
                      className="h-10"
                      src={require("../../assets/images/logo/logo3.png")}
                      alt="FMP"
                    />
                  </a>
                  <div className=" w-full flex items-center">
                    <p className="font-text-logo">HOA 3D</p>
                  </div>
                </div>
                <div
                  onClick={() => setIsShowing(false)}
                  className="absolute right-5 inline-flex items-center justify-center rounded-md border border-white p-0 text-white ml-5 w-8 h-8"
                >
                  <AiOutlineClose className="h-6 w-6 block" />
                </div>
              </div>
              {sideBar.map((s, index) => (
                <NavLink
                  key={index}
                  activeClassName="active"
                  to={s.link}
                  className="link none-decoration ml-2 mr-2 mb-7"
                >
                  <div className="flex w-full h-12">
                    <div className=" flex justify-center items-center">
                      <div className="flex justify-center items-center text-3xl ">
                        {s.icon}
                      </div>
                    </div>
                    <div className="flex items-center text-base whitespace-nowrap ml-5 ">
                      {s.name}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="min-h-full">
        <Disclosure as="nav" className="back-ground-side">
          {({ open }) => (
            <>
              <div className=" px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-20 items-center justify-between">
                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <div className="flex items-center justify-center">
                      <Disclosure.Button
                        onClick={() => setIsShowing(true)}
                        className="inline-flex items-center justify-center rounded-md border border-white p-2 w-11 h-11 text-white "
                      >
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <FaBars
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <FaBars
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                      <a
                        href="/trang-nha-vuon"
                        className="flex-shrink-0 flex items-center pl-3"
                      >
                        <img
                          className="h-12"
                          src={require("../../assets/images/logo/logo3.png")}
                          alt="FMP"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="lg:flex items-center ml-2  hidden ">
                    {!isShowLogo ? (
                      <>
                        {" "}
                        <a
                          href="/trang-nha-vuon"
                          className="flex-shrink-0 flex items-center"
                        >
                          <img
                            className="h-12"
                            src={require("../../assets/images/logo/logo3.png")}
                            alt="FMP"
                          />
                        </a>
                        <div className=" w-full flex items-center">
                          <p className="font-text-logo">HOA 3D</p>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="hidden md:block">{/* Navbar */}</div>
                  </div>
                  <div className="md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}

                      {/* <ButtonPosted button={{ name: "Đăng bán" }} />
                      <Menu as="div" className="relative ml-4 hidden md:block">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 p-2 ">
                            <span className="sr-only">Open user menu</span>
                            <BiMessageRoundedDetail
                              className="block h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <Menu as="div" className="relative ml-3 hidden md:block">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 p-2 ">
                            <span className="sr-only">Open user menu</span>
                            <MdOutlineNotificationsNone
                              className="block h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu> */}
                      <Menu as="div" className="relative ml-3 md:mr-5">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 ">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-11 w-11 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="flex items-center p-3">
                              <img
                                className="h-11 w-11 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />

                              <p className="mb-0 ml-2 font-semibold text-base">
                                Quốc Việt Phạm
                              </p>
                            </div>
                            <div className="line-page"></div>
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                            <div className="line-page"></div>
                            <div className="flex items-center justify-center my-2">
                              <button class="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg">
                                Đăng xuất
                              </button>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <div className="flex mx-2 pb-2 sm:pr-5  lg:pr-10 md:mb-5">
          <div className="w-full md:ml-5 rounded-3xl bg-side-test sm:bg-transparent">
            {/* SideBar for MD */}
            <div
              className={
                !isShowLogo
                  ? "hidden lg:block w-48  h-screen fixed pt-5"
                  : "hidden lg:block w-48  h-screen fixed top-10"
              }
            >
              {isShowLogo ? (
                <div className="flex justify-center items-center w-full mb-3">
                  <div className="flex">
                    <a
                      href="/trang-nha-vuon"
                      className="flex-shrink-0 flex items-center"
                    >
                      <img
                        className="h-11"
                        src={require("../../assets/images/logo/logo3.png")}
                        alt="FMP"
                      />
                    </a>
                    <div className=" w-full flex items-center">
                      <p className="font-text-logo">HOA 3D</p>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {sideBar.map((s, index) => (
                <NavLink
                  activeClassName="active"
                  to={s.link}
                  className="link none-decoration ml-5 mb-8"
                >
                  <div className="flex w-full h-12">
                    <div className=" flex justify-center items-center">
                      <div className="flex justify-center items-center text-3xl ">
                        {s.icon}
                      </div>
                    </div>
                    <div className=" flex items-center font-medium text-lg whitespace-nowrap ml-4 ">
                      {s.name}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>

            <div className="w-full pl-0  pr-0 lg:pr-0  lg:pl-48 ">
              <div className="bg-page rounded-3xl ">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <ButtonOnTop />
    </div>
  );
};

export default SidebarGarden;
