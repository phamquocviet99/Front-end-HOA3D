import React from "react";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalAddCardShip({ visible, onClose }) {
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
        <p className="text-center text-2xl  text-zinc-600">Thêm nhà xe mới</p>
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Tên nhà xe :</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nhà xe"
              />
            </div>
            <div className="mt-3">
              <p className=" mb-2 text-zinc-500">Địa chỉ giao hàng :</p>
              <input
                className=" w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Loại xe :</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Loại xe"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Số điện thoại :</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Địa chỉ nhận hàng :</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Địa chỉ"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            title="Thêm nhà xe mới"
            onClick={submitCard}
            className="text-sm ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded "
          >
            Thêm
          </button>
          <button
            title="Tắt hiển thị"
            onClick={onClose}
            className="ml-2 test-sm bg-red-500 hover:bg-red-600 text-white font-base py-2 px-3 rounded "
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}
