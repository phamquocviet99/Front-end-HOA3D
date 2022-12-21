import { React } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ButtonDeposit from "../../../components/ButtonPayment/ButtonDeposit";
import ButtonWaitingShopPayment from "../../../components/ButtonWaitingShopPayment/ButtonWaitingShopPayment";
import ButtonDelivery from "../../../components/ButtonDelivery/ButtonDelivery";
import ButtonWaitingDelivery from "../../../components/ButtonWaitingDelivery/ButtonWaitingDelivery";
import ButtonWaitingCensorship from "../../../components/ButtonWaitingCensorship/ButtonWaitingCensorship";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",

      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",

      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
];
const DashboardGarden = () => {
  const navigate = useNavigate();

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-start-1 col-end-2">
          <div className="py-2 px-4">
            <button
              title="Đăng bán sản phẩm"
              className="shadow-md mb-2 w-full bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-full "
            >
              <div className="flex justify-center items-center ">
                <p className="mb-0 text-lg">Đăng bán</p>
                <i class="fa-solid fa-arrow-right text-lg ml-3 mt-1 text-white"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="col-start-2 col-end-4">
          <div className="py-2 px-4">
            <button
              title="Đăng bán sản phẩm"
              style={{ color: "#2D3693" }}
              className="shadow-md mb-2 w-full bg-orange-button hover:bg-orange-400   py-2 px-3 rounded-full "
            >
              <div className="flex justify-center items-center ">
                <p className="mb-0 text-lg">Các sản phẩm đang được thu mua</p>
                <i
                  style={{ color: "#2D3693" }}
                  className="fa-solid fa-arrow-right text-lg ml-3 mt-1 "
                ></i>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="py-2 px-4">
            <button
              title="Đăng bán sản phẩm"
              className="shadow-md mb-2 w-full bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-full "
            >
              <div className="flex justify-center items-center ">
                <p className="mb-0 text-lg">Đơn hàng</p>
                <i class="fa-solid fa-arrow-right text-lg ml-3 mt-1 text-white"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-3">
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
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="w-full bg-white rounded-xl shadow-md p-3">
          <div className="flex justify-between items-center">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Đơn hàng quan tâm</p>
              <p className="mb-0 text-sm text-gray-400">Có 6 đơn cần xử lý</p>
            </div>
            <button
              title="Xem tất cả đơn hàng"
              className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg shadow-md"
            >
              Xem tất cả
            </button>
          </div>
          <div className="mt-3">
            {listOrder?.map((o, index) => (
              <div
                key={index}
                className="w-full shadow-md rounded-xl border mt-2 p-3 bg-slate-50 "
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
                <div className="grid grid-cols-2">
                  <p className="text-gray-500 mb-0">
                    Cửa hàng :{" "}
                    <span className="font-bold text-black">{o?.nameShop} </span>
                  </p>

                  <p className="text-gray-500 mb-0">
                    Tổng tiền :{" "}
                    <span className="font-bold text-red-500">
                      {o?.totalPrice}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-md p-3">
          <div className="flex justify-between items-center">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Sản phẩm đang bán</p>
              <p className="mb-0 text-sm text-gray-400">
                Có 6 sản phẩm đang bán
              </p>
            </div>
            <button
              title="Xem tất cả đơn hàng"
              className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg shadow-md"
            >
              Xem tất cả
            </button>
          </div>
          <div className="mt-3 ">
            <div className=" relative shadow-md rounded-lg">
              <table className="w-full text-sm rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg">
                  <tr>
                    <th scope="col" className="py-3 px-6 rounded-tl-lg">
                      Tên SP
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Loại
                    </th>

                    <th scope="col" className="py-3 px-6 rounded-tr-lg">
                      Giá đang bán
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder?.map((o, index) => (
                    <tr className="bg-white border-t">
                      <th
                        scope="row"
                        className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap text-center rounded-b-lg"
                      >
                        Hoa lan trắng
                      </th>
                      <td className="py-3 px-6 flex justify-center">
                        <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
                          <p className="mb-0 text-white text-xs">A</p>
                        </div>
                      </td>
                      <td className="py-3 px-6  text-center rounded-b-lg">
                        1.000.000đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-md p-3">
          <div className="flex justify-between items-center">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Sản phẩm cửa hàng mua</p>
              <p className="mb-0 text-sm text-gray-400">
                Có 6 cửa hàng cần mua
              </p>
            </div>
            <button
              title="Xem tất cả đơn hàng"
              className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg shadow-md"
            >
              Xem tất cả
            </button>
          </div>
          <div className="mt-3 ">
            <div className=" relative shadow-md rounded-lg">
              <table className="w-full text-sm rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-lg">
                  <tr>
                    <th scope="col" className="py-3 px-6 rounded-tl-lg">
                      Tên SP
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Loại
                    </th>

                    <th scope="col" className="py-3 px-6 rounded-tr-lg">
                      Giá đang bán
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder?.map((o, index) => (
                    <tr className="bg-white border-t">
                      <th
                        scope="row"
                        className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap text-center rounded-b-lg"
                      >
                        Hoa lan trắng
                      </th>
                      <td className="py-3 px-6 flex justify-center">
                        <div className=" rounded-full bg-green-600  flex justify-center items-center p-2 h-6 w-6">
                          <p className="mb-0 text-white text-xs">A</p>
                        </div>
                      </td>
                      <td className="py-3 px-6  text-center rounded-b-lg">
                        1.000.000đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-start-1 col-end-4">
        
        </div>
        <div className="col-start-4 ">
          <div className="w-full bg-white rounded-xl shadow-md p-4">
            <Line options={options} data={data}></Line>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardGarden;
