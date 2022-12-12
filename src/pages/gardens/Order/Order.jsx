import {
  RiNewspaperLine,
  RiFileMusicLine,
  RiTaskLine,
  RiExchangeBoxLine,
} from "react-icons/ri";
import "./Order.css";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";
import ButtonDetailOrder from "../../../components/ButtonDetailOrder/ButtonDetailOrder";
import ButtonEditOrder from "../../../components/ButtonEditOrder/ButtonEditOrder";
import ButtonDeleteOrder from "../../../components/ButtonDeleteOrder/ButtonDeleteOrder";
import { MdBallot, MdDescription } from "react-icons/md";
import { GoChecklist, GoTasklist } from "react-icons/go";

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
      status: "sendMoney",
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
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <i className="fa-solid fa-table-list text-orange-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Tổng đơn hàng</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-orange-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <i className="fa-solid fa-file-circle-plus text-indigo-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn hàng mới</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-indigo-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <i className="text-blue-500 text-4xl fa-solid fa-truck-fast"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn đang giao</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-blue-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="p-4  w-full bg-white rounded-xl shadow-md">
            <div className="flex justify-around items-center">
              <div className="p-3 bg-rose-100 rounded-lg">
                <i className="fa-solid fa-building-circle-check text-rose-500 text-4xl"></i>
              </div>
              <div>
                <p className="mb-0 text-base text-gray-500">Đơn hoàn thành</p>
                <div className="flex justify-start items-center mt-1">
                  <p className="mb-0 text-xl font-bold text-rose-500 mr-2">
                    +2304
                  </p>
                  <p className="mb-0 text-base text-green-600">(100%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full rounded-xl bg-white mt-3 p-3 shadow-md">
        <div>
          <div className="row">
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
          <div className=" hidden md:block overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className=" w-full text-sm text-left text-gray-500 ">
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
                      ) : o.status === "sendMoney" ? (
                        <>Đã đặt cọc</>
                      ) : (
                        <>Đơn hàng mới</>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">{o.date}</td>
                    <td className="py-4 flex justify-center items-center">
                      {o.status === "delivered" ? (
                        <ButtonDetailOrder />
                      ) : o.status === "delivering" ? (
                        <ButtonDetailOrder />
                      ) : o.status === "sendMoney" ? (
                        <ButtonDelivery />
                      ) : (
                        <ButtonEditOrder />
                      )}
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
                  <p className="font-bold text-base mb-2">Mã đơn : {o.id}</p>
                  <p className="text-gray-500">
                    {o.status === "delivered" ? (
                      <>Đã giao hàng</>
                    ) : o.status === "delivering" ? (
                      <>Đang giao hàng</>
                    ) : o.status === "sendMoney" ? (
                      <>Đã đặt cọc</>
                    ) : (
                      <>Đơn hàng mới</>
                    )}
                  </p>
                </div>

                <p className="text-gray-500 mb-2">
                  Sản phẩm :{" "}
                  <span className="font-bold text-black">{o?.nameProduct}</span>
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 mb-2">
                    Cửa hàng :{" "}
                    <span className="font-bold text-black ">{o?.nameShop}</span>
                  </p>
                  <p className="text-gray-500 mb-2">
                    Số lượng :{" "}
                    <span className="font-bold text-black">{o?.count}</span>
                  </p>
                </div>

                <p className="text-gray-500">
                  Dự kiến ngày đến :{" "}
                  <span className="font-bold text-black">{o?.date}</span>
                </p>

                <div
                  className="flex justify-between
                 items-center"
                >
                  {o.status === "delivered" ? (
                    <ButtonDetailOrder />
                  ) : o.status === "delivering" ? (
                    <ButtonDetailOrder />
                  ) : o.status === "sendMoney" ? (
                    <ButtonDelivery />
                  ) : (
                    <ButtonEditOrder />
                  )}
                  <p className="text-red-500 mb-0">Giá : {o?.totalPrice}</p>
                </div>
              </div>
            ))}
          </div>
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
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Order;
