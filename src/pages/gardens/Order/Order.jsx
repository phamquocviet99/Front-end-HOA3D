import { useState } from "react";
import {
  RiNewspaperLine,
  RiFileMusicLine,
  RiTaskLine,
  RiExchangeBoxLine,
} from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import "./Order.css";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";

function Order() {
  const listOrder = [
    {
      id: "HD1",
      nameProduct: "Hoa hồng vàng",
      nameShop: "Minh An",
      count: "12kg",
      totalPrice: "1.000.000đ",
      status: "delivered",
      date: "22/12/2022",
    },
    {
      id: "HD2",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Huệ",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "notDelivery",
      date: "Chưa có",
    },
    {
      id: "HD3",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh An",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "delivering",
      date: "22/12/2022",
    },
    {
      id: "HD4",
      nameProduct: "Hoa lan trắng",
      nameShop: "Ba Lan",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "delivering",
      date: "22/12/2022",
    },
    {
      id: "HD5",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Minh",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "delivered",
      date: "22/12/2022",
    },
    {
      id: "HD6",
      nameProduct: "Hoa lan trắng",
      nameShop: "Minh Hoàng",
      count: "200kg",
      totalPrice: "2.000.000đ",
      status: "notDelivery",
      date: "Chưa có",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-3 mt-2">
          <div className="p-4 w-full bg-white rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-base text-gray-500">Tổng hóa đơn</p>
                <div className="flex justify-start items-center mt-2">
                  <p className="mb-0 text-xl font-mono text-gray-600 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-red-600">(100%)</p>
                </div>
              </div>
              <div className="p-2 bg-orange-50 rounded-md">
                <RiNewspaperLine className="text-orange-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4 w-full bg-white rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-base text-gray-500">Hóa đơn chuẩn bị</p>
                <div className="flex justify-start items-center mt-2">
                  <p className="mb-0 text-xl font-mono text-gray-600 mr-2">
                    +1234
                  </p>
                  <p className="mb-0 text-base text-red-600">(20%)</p>
                </div>
              </div>
              <div className="p-2 bg-red-50 rounded-md">
                <RiExchangeBoxLine className="text-red-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4 w-full bg-white rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-base text-gray-500">
                  Hóa đơn đang giao
                </p>
                <div className="flex justify-start items-center mt-2">
                  <p className="mb-0 text-xl font-mono text-gray-600 mr-2">
                    +250
                  </p>
                  <p className="mb-0 text-base text-red-600">(30%)</p>
                </div>
              </div>
              <div className="p-2 bg-purple-50 rounded-md">
                <RiFileMusicLine className="text-purple-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4 w-full bg-white rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-base text-gray-500">
                  Hóa đơn hoàn thành
                </p>
                <div className="flex justify-start items-center mt-2">
                  <p className="mb-0 text-xl font-mono text-gray-600 mr-2">
                    +250
                  </p>
                  <p className="mb-0 text-base text-red-600">(20%)</p>
                </div>
              </div>
              <div className="p-2 bg-green-50 rounded-md">
                <RiTaskLine className="text-green-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md bg-white mt-3 p-3">
        <div>
          <div className="row">
            <p>Bộ lọc :</p>
            <div className="col-md-4 mt-2">
              <select
                id="countries_disabled"
                className="px-2 h-10 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full "
              >
                <option selected>Loại hoa</option>
                <option value="US">Hoa Lan</option>
                <option value="CA">Hoa Cúc</option>
                <option value="FR">Hoa Đào</option>
                <option value="DE">Hoa Hồng</option>
              </select>
            </div>
            <div className="col-md-4 mt-2">
              <select
                id="countries_disabled"
                className="px-2 h-10 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full "
              >
                <option selected>Trạng thái</option>
                <option value="US">Chưa giao hàng</option>
                <option value="CA">Đã giao hàng</option>
                <option value="FR">Đang giao hàng</option>
              </select>
            </div>
            <div className="col-md-4 mt-2">
              <select
                id="countries_disabled"
                className="px-2 h-10 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full "
              >
                <option selected>Số lượng</option>
                <option value="US">Cao tới thấp</option>
                <option value="CA">Thấp tới cao</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                    Mã đơn
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Sản phẩm
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Cửa hàng
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Số lượng
                  </th>

                  <th scope="col" className="py-3 px-6 text-center">
                    Giá tiền
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Trạng thái
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Dự kiến ngày đến
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
                    <td className="py-4 px-6 text-center">{o.nameProduct}</td>
                    <td className="py-4 px-6 text-center">{o.nameShop}</td>
                    <td className="py-4 px-6 text-center">{o.count}</td>
                    <td className="py-4 px-6 text-center">{o.totalPrice}</td>
                    <td className="py-4 px-6 flex justify-center">
                      {o.status === "delivered" ? (
                        <>Đã giao hàng</>
                      ) : o.status === "delivering" ? (
                        <>Đang giao hàng</>
                      ) : (
                        <ButtonDelivery />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">{o.date}</td>
                    <td className="py-4 flex justify-center items-center">
                      <button className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md mx-1">
                        <AiFillEye className="text-white text-2xl" />
                      </button>
                      <button className="p-2 bg-green-600 hover:bg-green-700 rounded-md m-1">
                        <FiEdit className="text-white text-2xl" />
                      </button>
                      <button className="p-2 bg-red-600 hover:bg-red-700 rounded-md mx-1">
                        <FaRegWindowClose className="text-white text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
              className="flex justify-end items-center pt-3 pr-3"
              aria-label="Table navigation"
            >
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="/#"
                    className=" rounded-l-lg py-2  px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Trang trước
                  </a>
                </li>
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
                <li>
                  <a
                    href="/#"
                    className=" rounded-r-lg py-2  px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Trang tiếp
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
