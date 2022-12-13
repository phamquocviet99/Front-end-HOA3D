import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalPayment({ visible, onClose }) {
  const [startDate, setStartDate] = useState(new Date());
  if (!visible) return null;
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
            <p className="text-center text-2xl mb-0 mt-2 text-zinc-600">
              ĐẶT CỌC
            </p>
          </div>
          <div className="w-3/12 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 rounded-md  h-9 w-9 flex justify-center items-center m-2 border-gray-400 border-2  focus:ring-0"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="row ">
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500">Mã giao dịch :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Mã hóa đơn"
                />
              </div>
              <div className="mt-3">
                <p className=" mb-2 text-zinc-500">Số tiền :</p>
                <input
                  className=" w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Số tiền"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-3">
                <p className="mb-2 text-zinc-500">Người gửi :</p>
                <input
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tên"
                />
              </div>
              <div className="mt-3">
                <p className="mb-2 text-zinc-500">Ngày giao hàng dự kiến :</p>
                <DatePicker
                  className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="ml-2 bg-red-400 hover:bg-red-500 text-white font-base py-2 px-3   border-blue-700 rounded "
            >
              Hủy đơn hàng
            </button>
            <button
              onClick={submitCard}
              className=" ml-2 bg-blue-600 hover:bg-blue-700 text-white font-base py-2 px-3  rounded "
            >
              Đặt cọc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
