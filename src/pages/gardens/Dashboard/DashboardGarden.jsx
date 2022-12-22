import { React } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import ButtonDeposit from "../../../components/ButtonPayment/ButtonDeposit";
import ButtonWaitingShopPayment from "../../../components/ButtonWaitingShopPayment/ButtonWaitingShopPayment";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";
import ButtonWaitingDelivery from "../../../components/ButtonWaitingDelivery/ButtonWaitingDelivery";
import ButtonWaitingCensorship from "../../../components/ButtonWaitingCensorship/ButtonWaitingCensorship";
import { useNavigate } from "react-router-dom";
import ButtonPosted from "../../../components/ButtonPosted/ButtonPosted";
import BarChart from "./Components/BarChart";
import DoughnutChart from "./Components/DounghnutChart";
const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);

Chart.register(...controllers);

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
    id: "HD3",
    nameProduct: "Hoa lan trắng",
    nameShop: "Minh An",
    count: "200kg",
    totalPrice: "2.000.000đ",
    status: "waitingPayment",
    date: "22/12/2022",
  },
];
const DashboardGarden = () => {
  const navigate = useNavigate();
  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  return (
    <div className="">
      <div className="w-full bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
        <div>
          <p style={{ fontSize: "20px" }} className="font-bold mb-2 mr-3">
            Trang chủ
          </p>
          <p style={{ fontSize: "16px" }} className="text-gray-400 mb-0 mr-3">
            Chào mừng Ba Lan
          </p>
        </div>

        <ButtonPosted />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
        <div className="">
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
        <div className="">
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
        <div className="">
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
        <div className="">
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
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="xl:col-start-1 xl:col-end-3">
          <div className=" bg-white rounded-xl shadow-md p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-96">
                <BarChart />
              </div>
              <div className="h-96">
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-md">
          <div className="flex justify-between items-center  p-3">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Đơn hàng quan tâm</p>
              <p className="mb-0 text-sm text-gray-400">Có 6 đơn cần xử lý</p>
            </div>
            <button
              onClick={() => navigate("/nha-vuon/don-hang")}
              title="Xem tất cả đơn hàng"
              className=" hover:bg-gray-50 text-gray-400  py-2 px-3 rounded-lg "
            >
              Xem tất cả
            </button>
          </div>
          <div>
            {listOrder?.map((o, index) => (
              <div
                onDoubleClick={goToDetail}
                key={index}
                className="border-t flex justify-between item-center py-3 px-2 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="flex justify-center items-center h-12 w-12 rounded-md bg-sky-100 border-2 border-sky-300 text-sky-600">
                    <p className="mb-0 text-sm">{o?.id}</p>
                  </div>

                  <div className="ml-3">
                    <p className="text-gray-400 text-sm mb-1">
                      Cửa hàng :{" "}
                      <span className="text-gray-700">{o?.nameShop}</span>
                    </p>
                    <p className="text-gray-400 text-sm mb-1">
                      Tổng tiền :{" "}
                      <span className="text-red-400">{o?.totalPrice}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-2 text-sm">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className=" bg-white rounded-xl shadow-md p-3">
          <div className="pl-1">
            <p className="mb-0 text-lg text-gray-600">Giao dịch tiền</p>
            <p className="mb-0 text-sm text-gray-400">
              Có 10 giao dịch trong tháng này
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <div className="h-14 w-14 text-green-500 flex justify-center items-center rounded-md bg-green-100">
                <i class="fa-regular fa-credit-card text-2xl"></i>
              </div>
              <div className="ml-3">
                <p className="mb-0 text-base">Nội dung gửi</p>
                <p className="mb-0 test-base text-gray-400">22/7/2022</p>
              </div>
            </div>
            <p className="mb-0 text-lg text-blue-500">+25.000.000đ</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <div className="h-14 w-14 text-green-500 flex justify-center items-center rounded-md bg-green-100">
                <i class="fa-regular fa-credit-card text-2xl"></i>
              </div>
              <div className="ml-3">
                <p className="mb-0 text-base">Nội dung gửi</p>
                <p className="mb-0 test-base text-gray-400">22/7/2022</p>
              </div>
            </div>
            <p className="mb-0 text-lg text-blue-500">+25.000.000đ</p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <div className="h-14 w-14 text-green-500 flex justify-center items-center rounded-md bg-green-100">
                <i class="fa-regular fa-credit-card text-2xl"></i>
              </div>
              <div className="ml-3">
                <p className="mb-0 text-base">Nội dung gửi</p>
                <p className="mb-0 test-base text-gray-400">22/7/2022</p>
              </div>
            </div>
            <p className="mb-0 text-lg text-blue-500">+25.000.000đ</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-md ">
          <div className="flex justify-between items-center p-3">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Sản phẩm đang bán</p>
              <p className="mb-0 text-sm text-gray-400">
                Có 6 sản phẩm đang bán
              </p>
            </div>
            <button
              onClick={() => navigate("/nha-vuon/san-pham")}
              title="Xem tất cả sản phẩm đang bán"
              className=" hover:bg-gray-50 text-gray-400  py-2 px-3 rounded-lg "
            >
              Xem tất cả
            </button>
          </div>
          <div>
            <div className=" relative ">
              <table className="w-full text-sm ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                      Tên SP
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                      Loại
                    </th>

                    <th scope="col" className="py-3 px-6 text-center">
                      Giá đang bán
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder?.map((o, index) => (
                    <tr className="hover:bg-gray-50 border-t">
                      <th
                        scope="row"
                        className="py-3 px-2 font-normal text-gray-900  text-center"
                      >
                        Hoa lan trắng
                      </th>
                      <td className="py-3 px-6 flex justify-center">
                        <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
                          <p className="mb-0 text-white text-xs">A</p>
                        </div>
                      </td>
                      <td className="py-3 px-6  text-center ">1.000.000đ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-md ">
          <div className="flex justify-between items-center">
            <div className="p-3">
              <p className="mb-0 text-lg text-gray-600">
                Sản phẩm cửa hàng mua
              </p>
              <p className="mb-0 text-sm text-gray-400">
                Có 6 cửa hàng cần mua
              </p>
            </div>
            <button
              onClick={() => navigate("/nha-vuon/mua-ban")}
              title="Xem tất cả cửa hàng mua"
              className=" hover:bg-gray-50 text-gray-400  py-2 px-3 rounded-lg "
            >
              Xem tất cả
            </button>
          </div>
          <div>
            {listOrder?.map((o, index) => (
              <div
                key={index}
                className="flex justify-between items-center hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="pl-2 pb-2">
                    <img
                      className=" h-24 md:h-20 w-24 md:w-20 object-cover rounded-lg "
                      alt=""
                      src={require("../../../assets/images/avartar/avartar.jpg")}
                    />
                  </div>
                  <div className="ml-2">
                    <p className="mb-1 text-sm  text-gray-600">
                      Hoa Lan Tím Loại B
                    </p>
                    <p className="mb-1 text-sm text-gray-500">
                      Cửa hàng : <span className="text-black">Minh Lan</span>{" "}
                    </p>
                    <p className="mb-1 text-sm text-gray-500">
                      Số lượng : <span className="text-black">15kg</span>
                    </p>
                    <p className="block xl:hidden mb-1 text-sm text-gray-500">
                      Giá : <span className="text-black">2.000.000đ/kg</span>
                    </p>
                  </div>
                </div>
                <p className="hidden xl:block mb-0 text-base mr-2">
                  2.000.000đ/kg
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGarden;
