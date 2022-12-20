import { useState } from "react";
import CardProductByAdmin from "./CardProductByAdmin";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
export default function ListProductByAdmin() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [listProductAdmin, setListProductAdmin] = useState([
    {
      id: "1",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "2",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "1",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "2",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "3",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "4",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "5",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "6",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "7",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
    {
      id: "8",
      name: "Hoa sen",
      avatar: "../../../assets/images/logo/fmp.png",
      nameCategory: "Hoa",
    },
  ]);
  return (
    <div className="w-full min-h-screen">
       <div className="grid gird-cols-1 sm:gird-cols-2 md:grid-cols-2 px-2 mt-2">
          <div>
            <form className="flex  justify-start md:justify-start md:mt-0 items-center">
              <div className="relative w-full md:w-2/3">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-white border-y border-l border-gray-300 text-gray-900 text-sm rounded-l-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 shadow-md"
                  placeholder="Tìm kiếm"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-2.5 px-4  text-sm font-medium bg-white border border-gray-300  rounded-r-full  focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="md:flex justify-end items-center  mb-3">
            <Menu as="div" className="relative inline-block text-left mr-3">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center bg-white rounded-lg shadow-md px-4 py-1 text-base font-medium text-gray-600  hover:text-gray-400 focus:outline-none ">
                  <i class="fa-solid fa-arrow-up-wide-short mr-2 h-7 w-7 mt-2 text-xl"></i>
                  Sắp xếp
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center  bg-white rounded-lg shadow-md px-4 py-1 text-base font-medium text-gray-600  hover:text-gray-400 focus:outline-none ">
                  <i class="fa-solid fa-filter mr-2 h-7 w-7 mt-2 text-xl"></i>
                  Lọc
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-3 mt-3">
        {listProductAdmin?.map((p, index) => (
          <div key={index} className="flex justify-center w-full">
            <div className="w-11/12">
              <CardProductByAdmin />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
