import "./Order.css";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";
import ButtonDetailOrder from "../../../components/ButtonDetailOrder/ButtonDetailOrder";
import ButtonPayment from "../../../components/ButtonPayment/ButtonPayment";
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
            <div className="col-md-6">
              <form className="flex  justify-start md:mt-2 items-center">
                <label for="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full md:w-1/2">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   "
                    placeholder="Tìm kiếm mã hóa đơn"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  <span className="sr-only">Tìm kiếm mã hóa đơn</span>
                </button>
              </form>
            </div>
            <div className="col-md-6 mt-2">
              <div className="flex justify-start items-center">
                <select
                  id="countries_disabled"
                  className="mr-2 px-2 h-10 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full "
                >
                  <option selected>Loại hoa</option>
                  <option value="US">Hoa Lan</option>
                  <option value="CA">Hoa Cúc</option>
                  <option value="FR">Hoa Đào</option>
                  <option value="DE">Hoa Hồng</option>
                </select>
                <select
                  id="countries_disabled"
                  className="px-2 h-10 bg-gray-50 border border-gray-300 text-zinc-500t-gray-900 text-sm rounded-lg  w-full focus:ring-0"
                >
                  <option selected>Trạng thái</option>
                  <option value="US">Chưa giao hàng</option>
                  <option value="CA">Đã giao hàng</option>
                  <option value="FR">Đang giao hàng</option>
                </select>
              </div>
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
                    Tổng tiền
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
                        <div className="border-green-600 border-2 px-2 py-1 rounded-full  text-green-600 w-32 text-center">
                          Đã giao hàng
                        </div>
                      ) : o.status === "delivering" ? (
                        <div className="border-orange-500 border-2 px-2 py-1 rounded-full  text-orange-500 w-32 text-center">
                          Đang giao hàng
                        </div>
                      ) : o.status === "sendMoney" ? (
                        <div className="border-red-600 border-2 px-2 py-1 rounded-full  text-red-600 w-32 text-center">
                          Đã đặt cọc
                        </div>
                      ) : (
                        <div className="border-blue-500 border-2 px-2 py-1 rounded-full  text-blue-500 w-32 text-center">
                          Đơn hàng mới
                        </div>
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
                        <ButtonPayment />
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
                  <p className="font-bold text-base">Mã đơn : {o.id}</p>
                  <p className="text-gray-500">
                  {o.status === "delivered" ? (
                        <div className="border-green-600 border-2 px-2 py-1 rounded-full  text-green-600 w-32 text-center">
                          Đã giao hàng
                        </div>
                      ) : o.status === "delivering" ? (
                        <div className="border-orange-500 border-2 px-2 py-1 rounded-full  text-orange-500 w-32 text-center">
                          Đang giao hàng
                        </div>
                      ) : o.status === "sendMoney" ? (
                        <div className="border-red-600 border-2 px-2 py-1 rounded-full  text-red-600 w-32 text-center">
                          Đã đặt cọc
                        </div>
                      ) : (
                        <div className="border-blue-500 border-2 px-2 py-1 rounded-full  text-blue-500 w-32 text-center">
                          Đơn hàng mới
                        </div>
                      )}
                  </p>
                </div>

                <p className="text-gray-500 mb-2">
                  Sản phẩm :{" "}
                  <span className="font-bold text-black">{o?.nameProduct} x {o?.count}</span>
                </p>
                <div className="flex justify-between items-center">
                <p className="text-gray-500 mb-2">
                    Tổng tiền :{" "}
                    <span className="font-bold text-red-500">
                      {o?.totalPrice}
                    </span>
                  </p>
                 
                </div>

                <p className="text-gray-500">
                  Dự kiến ngày đến :{" "}
                  <span className="font-bold text-black">{o?.date}</span>
                </p>

                <div
                  className="flex justify-end
                 items-center"
                >
                  {o.status === "delivered" ? (
                    <ButtonDetailOrder />
                  ) : o.status === "delivering" ? (
                    <ButtonDetailOrder />
                  ) : o.status === "sendMoney" ? (
                    <ButtonDelivery />
                  ) : (
                    <ButtonPayment />
                  )}
                  
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center pt-3 pr-3">
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
  );
}
export default Order;
