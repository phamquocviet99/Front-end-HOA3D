import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function ModalDelivery({ visible, onClose }) {
  const navigate = useNavigate();

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  const [startDate, setStartDate] = useState(new Date());
  if (!visible) return null;
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "mm/dd/yyyy",
    },
  };
  function handleClose(e) {
    if (e.target.id === "background-add-card") onClose();
  }
  function submitCard() {
    console.log("ddd");
  }
  return (
    <div
      id="background-add-card"
      onClick={handleClose}
      className="fixed  inset-0 bg-black bg-opacity-25 flex justify-center items-center backdrop-blur-sm z-20"
    >
      <div className=" bg-white rounded  overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto">
        <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-2xl mb-0  text-zinc-600">
              GIAO HÀNG
            </p>
          </div>
          <div className="w-3/12 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500   h-9 w-9 flex justify-center items-center m-2 focus:ring-0"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </button>
          </div>
        </div>
        <div className="line-y" />
        <div className="pl-4 pr-4 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="mb-0 text-base mt-2">Mã đơn : HD1</p>
              <p className="mb-0 text-base mt-2">
                Trạng thái : Chờ nhà vườn giao hàng
              </p>

              <p className="mb-0 text-base mt-2">Tổng tiền : 12.000.000</p>
            </div>
            <button
              title="Xem chi tiết đơn hàng"
              onClick={goToDetail}
              className=" bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-3 border border-blue-700 rounded-lg shadow-md"
            >
              Chi tiết
            </button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base ">Mã hóa đơn giao hàng :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Mã hóa đơn"
                />
              </div>
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base ">Giá giao hàng :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Giá"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base ">Chành xe :</p>
                <select
                  id="countries_disabled"
                  className="h-9 border border-gray-300 text-gray-700 text-sm rounded  w-full"
                >
                  <option className="text-gray-700 text-sm" selected>
                    Thành Bưởi
                  </option>
                  <option className="text-gray-700 text-sm" value="US">
                    Phương Trang
                  </option>
                  <option className="text-gray-700 text-sm" value="CA">
                    Hùng Cường
                  </option>
                  <option className="text-gray-700 text-sm" value="FR">
                    Thịnh Phát
                  </option>
                </select>
              </div>
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base ">Dự kiến ngày đến :</p>
                <DatePicker
                  locale={locale}
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="mb-2 text-zinc-500 text-base ">Ghi chú :</p>
            <textarea
              className="w-full border rounded h-24 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Ghi chú"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              title="Trở về trang trước"
              onClick={onClose}
              className="shadow-md ml-2 bg-gray-400 hover:bg-gray-500 text-white font-base py-2 px-3  rounded "
            >
              Hủy bỏ
            </button>
            <button
              title="Thực hiện giao hàng"
              onClick={submitCard}
              className="shadow-md ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded "
            >
              Giao hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
