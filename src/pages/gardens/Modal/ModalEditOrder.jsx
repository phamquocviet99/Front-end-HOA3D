import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalEditOrder({ visible, onClose }) {
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
    <div className="relative bg-white rounded p-4 overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto">
    <div className="absolute top-0 right-0">
          <button
            onClick={onClose}
            className="text-gray-500 rounded-md  h-9 w-9 flex justify-center items-center m-2 border-gray-400 border-2  focus:ring-0"
          >
            <i className="fa-solid fa-xmark text-2xl "></i>
          </button>
        </div>
      <p className="text-center text-2xl  text-zinc-600">
        Quá trình giao hàng
      </p>
      <div className="row">
        <div className="col-md-6">
          
          <div className="mt-3">
            <p className="mb-2 text-zinc-500">Mã hóa đơn giao hàng :</p>
            <input
              className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Mã hóa đơn"
            />
          </div>
          <div className="mt-3">
            <p className=" mb-2 text-zinc-500">Tên chành xe :</p>
            <input
              className=" w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Chành xe"
            />
          </div>
          <div className="mt-3">
            <p className="mb-2 text-zinc-500">Điện thoại chành xe :</p>
            <input
              className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Điện thoại"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <p className="mb-2 text-zinc-500">Địa chỉ nhận hàng :</p>
            <input
              className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Địa chỉ"
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
          <div className="mt-3">
            <p className="mb-2 text-zinc-500">Giá giao hàng :</p>
            <input
              className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Giá"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
      <button
      title="Trở về trang trước"
          onClick={onClose}
          className="ml-2 bg-red-500 hover:bg-red-600 text-white font-base py-2 px-3   border-blue-700 rounded "
        >
          Hủy giao hàng
        </button>
        <button
        title="Chỉnh sửa giao hàng"
          onClick={submitCard}
          className=" ml-2 bg-blue-600 hover:bg-blue-700 text-white font-base py-2 px-3  rounded "
        >
          Chỉnh sửa 
        </button>

       
      </div>
    </div>
  </div>
  );
}
