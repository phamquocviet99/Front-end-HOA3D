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
  }
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
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-start-1 col-end-4">
          <div className="mt-2">
            <div className=" hidden md:block overflow-x-auto relative shadow-md sm:rounded-lg ">
              <table className=" w-full text-sm text-left text-gray-500 border ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
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
            
           
          </div>
        </div>
        <div className="col-start-4 ">
          <div className="w-full bg-white rounded-xl shadow-md p-4">
            <Line options={options} data={data}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGarden;
