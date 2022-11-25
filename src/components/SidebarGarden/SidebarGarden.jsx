import { useEffect, Fragment, React, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiBox, BiBarChartSquare, BiFoodMenu } from "react-icons/bi";
import { GoCreditCard } from "react-icons/go";
import { TbDatabaseExport } from "react-icons/tb";
import { TbApps } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";

const SidebarGarden = ({ children }) => {
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
      name: "Trang chủ",
      link: "/trang-nha-vuon/trang-chu",
      icon: <TbApps />,
    },
    {
      name: "Sản phẩm",
      link: "/trang-nha-vuon/san-pham",
      icon: <BiBox />,
    },
    {
      name: "Sản lượng",
      link: "/trang-nha-vuon/san-luong",
      icon: <TbDatabaseExport />,
    },
    {
      name: "Hóa đơn",
      link: "/trang-nha-vuon/don-hang",
      icon: <BiFoodMenu />,
    },
    {
      name: "Doanh thu",
      link: "/trang-nha-vuon/doanh-thu",
      icon: <BiBarChartSquare />,
    },
    {
      name: "Ngân hàng",
      link: "/trang-nha-vuon/ngan-hang",
      icon: <GoCreditCard />,
    },
    {
      name: "Thông tin",
      link: "/trang-nha-vuon/nguoi-dung",
      icon: <HiOutlineUserCircle />,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative">
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={() => setIsShowing((isShowing) => !isShowing)}
          className="absolute flex justify-start background-side-phone h-full w-full fixed md:hidden"
        >
          <div className="flex justify-center items-center w-1/2 back-ground-side pt-10 pb-6 h-full fixed">
            <div>
              <div className="flex items-center ml-4 mb-4">
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
                <div className="hidden md:block">{/* Navbar */}</div>
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
      </Transition>
      <div className="min-h-full">
        <Disclosure as="nav" className="bolder-bottom-header ">
          {({ open }) => (
            <>
              <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      onClick={() => setIsShowing((isShowing) => !isShowing)}
                      className="inline-flex items-center justify-center rounded-md border border-white p-2 text-white  "
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="md:flex items-center ml-2  hidden md:block">
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
                    <div className="hidden md:block">{/* Navbar */}</div>
                  </div>
                  <div className="md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}

                      <Menu as="div" className="relative ml-3 hidden md:block">
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
                      </Menu>
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
        <div className="h-5"></div>
        <div className="flex ">
          {/* SideBar for MD */}
          <div className="hidden md:block w-48 back-ground-side h-screen fixed">
            <div className="ml-1 my-2 w-full flex justify-center items-center h-14">
              <img
                className="h-12"
                src={require("../../assets/images/logo/fmp.png")}
                alt="FMP"
              />
            </div>
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

          <div className="w-full pl-5 pb-4 pr-5 md:pr-10 md:pl-48">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarGarden;
