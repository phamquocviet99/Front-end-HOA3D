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

const SidebarGarden = ({ children }) => {
  const [linkCurrent, setLinkCurrent] = useState(window.location.pathname);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log("the age has changed");
  }, [linkCurrent]);
  function ChangeLink() {
    setLinkCurrent(window.location.pathname);
  }
  const [isShowing, setIsShowing] = useState(true);
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ];
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
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="back-ground-header rounded-bl-3xl">
        {({ open }) => (
          <>
            <div className=" px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                    className="inline-flex items-center justify-center rounded-md border border-white p-2 text-white hover:bg-gray-400 hover:text-white "
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center">
                  <a href="/trang-nha-vuon" className="flex-shrink-0">
                    <img
                      className="h-11"
                      src={require("../../assets/images/logo/logo2.png")}
                      alt="FMP"
                    />
                  </a>
                  <div className="hidden md:block">{/* Navbar */}</div>
                </div>
                <a className="block px-4 py-2 text-sm text-white">HOA 3D</a>
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
                    <Menu as="div" className="relative ml-3">
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
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      {/* <div className="h-5 bg-white"></div> */}
      <div className="flex">
        {/* SideBar */}
        <Transition
          show={isShowing}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="back-ground-side hidden md:block h-screen pt-20 w-28">
            {sideBar.map((s, index) => (
              <NavLink
                onClick={ChangeLink}
                activeClassName="active"
                to={s.link}
                className="link none-decoration "
              >
                {/* {linkCurrent === s.link ? (
                  <>
                    <div className="aaa"></div>
                    <div className="bbb"></div>
                  </>
                ) : (
                  <></>
                )} */}

                <div className="text-center">
                  <div className="container-icon">
                    <div className="icon-sidebar">{s.icon}</div>
                  </div>
                  <div className="link_text">{s.name}</div>
                </div>
              </NavLink>
            ))}
            {/* <NavLink
              activeClassName="active"
              to="/trang-nha-vuon/ngan-hang"
              className="link none-decoration "
            >
              {window.location.pathname === "/trang-nha-vuon/ngan-hang" ? (
                <>
                  <div className="aaa"></div>
                  <div className="bbb"></div>
                </>
              ) : (
                <></>
              )}

              <div className="text-center">
                <div className="container-icon">
                  <div className="icon-sidebar">
                    <TbApps />
                  </div>
                </div>
                <div className="link_text">sss</div>
              </div>
            </NavLink> */}
          </div>
        </Transition>
        <div className="w-full pt-4 pb-4 pr-10">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default SidebarGarden;
