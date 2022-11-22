import { Children, Fragment, React, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiBox, BiBarChartSquare, BiFoodMenu } from "react-icons/bi";
import { GoCreditCard } from "react-icons/go";
import { TbDatabaseExport } from "react-icons/tb";
import { TbApps } from "react-icons/tb";

const SidebarGarden = ({ children }) => {
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
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="">
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-green-600">
          {({ open }) => (
            <>
              <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
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
                    <div className="flex-shrink-0">
                      <img
                        className="h-9"
                        src={require("../../assets/images/logo/fmp.png")}
                        alt="FMP"
                      />
                    </div>
                    <div className="hidden md:block">{/* Navbar */}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 ">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-9 w-9 rounded-full"
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
                  <div className="-mr-2 flex md:hidden">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 ">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-9 w-9 rounded-full"
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
            <div
              className={!isShowing ? "bg-white hidden md:block h-screen m-3 rounded-xl" : "bg-white  h-screen m-3 rounded-xl"}
            >
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/trang-chu"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <TbApps />
                  </div>
                  <div className="link_text">Trang chủ</div>
                </div>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/san-pham"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <BiBox />
                  </div>
                  <div className="link_text">Sản phẩm</div>
                </div>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/san-luong"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <TbDatabaseExport />
                  </div>
                  <div className="link_text">Sản lượng</div>
                </div>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/don-hang"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <BiFoodMenu />
                  </div>
                  <div className="link_text">Hóa đơn</div>
                </div>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/doanh-thu"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <BiBarChartSquare />
                  </div>
                  <div className="link_text">Doanh thu</div>
                </div>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/trang-nha-vuon/ngan-hang"
                className="link none-decoration"
              >
                <div className="">
                  <div className="icon-sidebar">
                    <GoCreditCard />
                  </div>
                  <div className="link_text">Ngân hàng</div>
                </div>
              </NavLink>
            </div>
          </Transition>
          <div className="w-full">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarGarden;
