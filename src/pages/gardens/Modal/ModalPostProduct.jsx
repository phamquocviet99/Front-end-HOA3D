import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
export default function ModalPostProduct({ visible, onClose }) {
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
      <div className="bg-white rounded p-4">
        <p className="text-center text-2xl  text-zinc-600">
          Quá trình đăng bán sản phẩm
        </p>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Tên sản phẩm</p>
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Danh mục sản phẩm</p>
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Danh mục"
          />
        </div>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Số lượng hiện có</p>
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Số lượng"
          />
        </div>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Giá bán</p>
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Giá"
          />
        </div>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Ngày bắt đầu thu hoạch</p>
          <DatePicker
          className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="mt-3">
          <p className="mb-2 text-zinc-500">Đến ngày</p>
          <DatePicker
          className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={submitCard}
            className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded "
          >
            Đăng bán
          </button>
          <button
            onClick={onClose}
            className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
