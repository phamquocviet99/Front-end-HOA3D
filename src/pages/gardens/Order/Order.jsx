import "./Order.css";

import { useNavigate } from "react-router-dom";
import ButtonDeposit from "../../../components/ButtonPayment/ButtonDeposit";
import ButtonWaitingShopPayment from "../../../components/ButtonWaitingShopPayment/ButtonWaitingShopPayment";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";
import ButtonWaitingDelivery from "../../../components/ButtonWaitingDelivery/ButtonWaitingDelivery";
import ButtonWaitingCensorship from "../../../components/ButtonWaitingCensorship/ButtonWaitingCensorship";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Order() {
  const navigate = useNavigate();

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  const listOrder = [
    {
      id: "HD1",
      nameProduct: "Hoa hồng vàng",
      nameShop: "Minh An",
      count: "12kg",
      totalPrice: "1.000.000đ",
      status: "waitingDeposit",
      date: "22/12/2022",
    },
    {
      id: "HD2",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Huệ",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "waitingDeposit",
      date: "Chưa có",
    },
    {
      id: "HD3",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh An",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "waitingPayment",
      date: "22/12/2022",
    },
    {
      id: "HD4",
      nameProduct: "Hoa lan trắng",
      nameShop: "Ba Lan",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "waitingDelivery",
      date: "22/12/2022",
    },
    {
      id: "HD5",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Minh",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "delivering",
      date: "22/12/2022",
    },
    {
      id: "HD6",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Hoàng",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "delivering",
      date: "Chưa có",
    },
    {
      id: "HD7",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh An",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "waitingCensorship",
      date: "22/12/2022",
    },
    {
      id: "HD8",
      nameProduct: "Hoa lan trắng",
      nameShop: "Ba Lan",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "waitingCensorship",
      date: "22/12/2022",
    },
    {
      id: "HD9",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Minh",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "completed",
      date: "22/12/2022",
    },
    {
      id: "HD10",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Hoàng",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "cancel",
      date: "Chưa có",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className=" w-full bg-white shadow-md  rounded-xl">
        <div className="py-3 px-4 flex justify-between items-center">
          <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
            Danh sách đơn hàng
          </p>
        </div>
        <div className="line-y" />
        <div className=" w-full  p-3 ">
          <div className="grid gird-cols-1 sm:gird-cols-2 md:grid-cols-2 mt-3">
            <div>
              <form className="flex  justify-start md:justify-start md:mt-0 items-center">
                <div className="relative w-full md:w-2/3">
                  <div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    placeholder="Tìm kiếm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-2.5 px-4  text-sm font-medium bg-gray-50 border border-gray-300  rounded-r-full  focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center items-center  px-4 py-2 text-sm font-medium text-gray-600  hover:text-gray-400 focus:outline-none ">
                    <i class="fa-solid fa-arrow-up-wide-short mr-2 h-5 w-5 mt-2"></i>
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
                  <Menu.Button className="inline-flex w-full justify-center items-center  px-4 py-2 text-sm font-medium text-gray-600  hover:text-gray-400 focus:outline-none ">
                    <i class="fa-solid fa-filter mr-2 h-5 w-5 mt-2"></i>
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

          <div className="mt-4">
            <div className=" hidden md:block overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className=" w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                      Mã đơn
                    </th>

                    <th scope="col" className="py-3 px-6 text-center">
                      Cửa hàng
                    </th>

                    <th scope="col" className="py-3 px-6 text-center">
                      Tổng tiền
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                      Trạng thái
                    </th>

                    <th scope="col" className="py-3 px-6 text-center">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder?.map((o, index) => (
                    <tr className="bg-order border-b  ">
                      <td className="py-4 px-6 text-center">{o.id}</td>

                      <td className="py-4 px-6 text-center">{o.nameShop}</td>

                      <td className="py-4 px-6 text-center">{o.totalPrice}</td>
                      <td className="py-4 px-6 flex justify-center items-center">
                        {o.status === "waitingDeposit" ? (
                          <ButtonDeposit />
                        ) : o.status === "waitingPayment" ? (
                          <ButtonWaitingShopPayment />
                        ) : o.status === "waitingDelivery" ? (
                          <ButtonDelivery />
                        ) : o.status === "delivering" ? (
                          <ButtonWaitingDelivery />
                        ) : o.status === "waitingCensorship" ? (
                          <ButtonWaitingCensorship />
                        ) : o.status === "cancel" ? (
                          <button className="bg-red-500 shadow-md hover:bg-red-600 text-white px-2 py-1 rounded-full   w-32 text-center">
                            Đơn hàng hủy
                          </button>
                        ) : (
                          <button
                            title="Xem chi tiết"
                            onClick={goToDetail}
                            className="bg-green-600 shadow-md hover:bg-green-700  px-2 py-1 rounded-full  text-white w-32 text-center"
                          >
                            Đơn hoàn thành
                          </button>
                        )}
                      </td>

                      <td className="py-4 px-6 text-center">
                        <button
                          title="Xem chi tiết đơn hàng"
                          onClick={goToDetail}
                          className="  w-24 border-2 border-gray-300 hover:bg-gray-300 text-blue-500 text-sm  py-2 px-3 rounded-lg shadow-button"
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden ">
              {listOrder?.map((o, index) => (
                <div
                  key={index}
                  className="w-full shadow-md rounded-md border mt-3 p-3 bg-slate-50 "
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-base">Mã đơn : {o.id}</p>
                    <p className="text-gray-500">
                      {o.status === "waitingDeposit" ? (
                        <ButtonDeposit />
                      ) : o.status === "waitingPayment" ? (
                        <ButtonWaitingShopPayment />
                      ) : o.status === "waitingDelivery" ? (
                        <ButtonDelivery />
                      ) : o.status === "delivering" ? (
                        <ButtonWaitingDelivery />
                      ) : o.status === "waitingCensorship" ? (
                        <ButtonWaitingCensorship />
                      ) : o.status === "cancel" ? (
                        <button className="bg-red-500 shadow-md hover:bg-red-600 text-white px-2 py-1 rounded-full   w-32 text-center">
                          Đơn hàng hủy
                        </button>
                      ) : (
                        <button
                          title="Xem chi tiết"
                          onClick={goToDetail}
                          className="bg-green-600 shadow-md hover:bg-green-700  px-2 py-1 rounded-full  text-white w-32 text-center"
                        >
                          Đơn hoàn thành
                        </button>
                      )}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 mb-2">
                        Cửa hàng :{" "}
                        <span className="font-bold text-black">
                          {o?.nameShop}{" "}
                        </span>
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-500 mb-2">
                          Tổng tiền :{" "}
                          <span className="font-bold text-red-500">
                            {o?.totalPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button
                      title="Xem chi tiết đơn hàng"
                      onClick={goToDetail}
                      className=" bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-3 border border-blue-700 rounded-lg shadow-md"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-3 ">
              <select
                id="countries_disabled"
                className="px-2 h-8 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  focus:ring-0"
              >
                <option value="US">10</option>
                <option value="CA">20</option>
                <option value="FR">30</option>
              </select>
              <ul className="inline-flex items-center mt-2 h-10">
                <li>
                  <a
                    href="/#"
                    className=" rounded-l-lg py-2  px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Trang trước
                  </a>
                </li>
                <div className="hidden md:flex">
                  <li>
                    <a
                      href="/#"
                      className="py-2  px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      aria-current="page"
                      className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      30
                    </a>
                  </li>
                </div>
                <li>
                  <a
                    href="/#"
                    className=" rounded-r-lg py-2  px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Trang tiếp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
