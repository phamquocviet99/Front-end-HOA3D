import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function ModalPayment({ visible, onClose }) {
  const navigate = useNavigate();

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }
  const [startDate, setStartDate] = useState(new Date());
  if (!visible) return null;
  function handleClose(e) {
    if (e.target.id === "background-add-card") onClose();
  }
  function submitCard() {
    console.log("ddd");
  }
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
            <p className="text-center text-2xl mb-0  text-zinc-600">ĐẶT CỌC</p>
          </div>
          <div className="w-3/12 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500  h-9 w-9 flex justify-center items-center m-2 border-gray-400   focus:ring-0"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </button>
          </div>
        </div>
        <div className="line-y"></div>
        <div className="pl-4 pr-4 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="mb-0 text-base mt-2">Mã đơn : HD1</p>
              <p className="mb-0 text-base mt-2">Trạng thái : Chờ đặt cọc</p>
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

          <div className="row ">
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base">Mã giao dịch :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Mã hóa đơn"
                />
              </div>
              <div className="mt-3">
                <p className=" mb-2 text-zinc-500 text-base">Số tiền :</p>
                <input
                  className=" w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Số tiền"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base">Người gửi :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tên"
                />
              </div>
              <div className="mt-3">
                <p className="mb-2 text-zinc-500 text-base">
                  Ngày Đặt cọc :
                </p>
                <DatePicker
                  locale={locale}
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              title="Hủy bỏ đơn hàng"
              onClick={onClose}
              className="shadow-md ml-2 bg-gray-400 hover:bg-gray-500 text-white font-base py-2 px-3   border-blue-700 rounded "
            >
              Hủy đơn hàng
            </button>
            <button
              title="Xác nhận đã đặt cọc"
              onClick={submitCard}
              className="shadow-md ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded "
            >
              Đặt cọc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
