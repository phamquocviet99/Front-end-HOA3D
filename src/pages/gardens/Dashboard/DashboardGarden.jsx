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
];
const DashboardGarden = () => {
  const optionsBar = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          color: (ctx) =>
            ctx.index === 0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        display: false,
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu trong tuần",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
  };
  const optionsDounghnut = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Số đơn theo từng sản phẩm",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
  };
  const dataBar = {
    labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    datasets: [
      {
        borderRadius: 7,
        label: "Doanh thu theo ngày",
        data: [10, 2, 3, 4, 5, 6, 7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#cabeff",
      },
    ],
  };
  const dataDoughnut = {
    labels: ["Lan vàng", "Lan trắng", "Lan đỏ", "Lan tím"],
    datasets: [
      {
        borderRadius: 4,
        label: "Số đơn hàng",
        data: [10, 2, 3, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        // ],
      },
    ],
  };

  const navigate = useNavigate();
  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  return (
    <div className="">
      <div className="w-full bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
        <p style={{ fontSize: "20px" }} className="font-bold mb-0 mr-3">
          Trang quản lý
        </p>
        <ButtonPosted />
      </div>
      {/* <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
        <div className="md:col-start-1 md:col-end-2">
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
        <div className="col-start-2 xl:col-end-4">
          <div className="py-2 px-4">
            <button
              onClick={() => navigate("/nha-vuon/mua-ban")}
              title="Đến trang các sản phẩm cần mua"
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
              onClick={() => navigate("/nha-vuon/don-hang")}
              title="Đến trang đơn hàng"
              className="shadow-md mb-2 w-full bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-full "
            >
              <div className="flex justify-center items-center ">
                <p className="mb-0 text-lg">Đơn hàng</p>
                <i class="fa-solid fa-arrow-right text-lg ml-3 mt-1 text-white"></i>
              </div>
            </button>
          </div>
        </div>
      </div> */}
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
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="xl:col-start-1 xl:col-end-3">
          <div className=" bg-white rounded-xl shadow-md p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-96">
                <Bar
                  plugins={[ChartDataLabels]}
                  options={optionsBar}
                  data={dataBar}
                ></Bar>
              </div>
              <div className="h-96">
                <Doughnut options={optionsDounghnut} data={dataDoughnut} />
              </div>
            </div>
          </div>
        </div>
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
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="w-full bg-white rounded-xl shadow-md p-3">
          <div className="flex justify-between items-center">
            <div className="pl-1">
              <p className="mb-0 text-lg text-gray-600">Đơn hàng quan tâm</p>
              <p className="mb-0 text-sm text-gray-400">Có 6 đơn cần xử lý</p>
            </div>
            <button
              onClick={() => navigate("/nha-vuon/don-hang")}
              title="Xem tất cả đơn hàng"
              className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg shadow-md"
            >
              Xem tất cả
            </button>
          </div>
          <div className="mt-3">
            {listOrder?.map((o, index) => (
              <div
                onDoubleClick={goToDetail}
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
                <div className="grid grid-cols-1 xl:grid-cols-2">
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
              onClick={() => navigate("/nha-vuon/san-pham")}
              title="Xem tất cả sản phẩm đang bán"
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
                    <tr className="hover:bg-gray-50 border-t">
                      <th
                        scope="row"
                        className="py-3 px-2 font-normal text-gray-900  text-center rounded-b-lg"
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
              className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-3 rounded-lg shadow-md"
            >
              Xem tất cả
            </button>
          </div>
          <div className="mt-3 ">
            {listOrder?.map((o, index) => (
              <div className="flex justify-between items-center shadow-md my-3 border rounded-lg pr-2 bg-slate-50">
                <div className="flex items-center">
                  <div className="">
                    <img
                      className=" h-20 w-20 object-cover rounded-lg "
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
                  </div>
                </div>
                <p className="mb-0 text-base">2.000.000đ/kg</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGarden;
