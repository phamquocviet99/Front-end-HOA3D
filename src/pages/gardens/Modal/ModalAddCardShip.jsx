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
      <div className=" bg-white rounded overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto">
        <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-2xl mb-0  text-zinc-600">
              THÊM NHÀ XE MỚI
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
        <div className="pl-4 pr-4 pb-4">
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
              title="Tắt hiển thị"
              onClick={onClose}
              className="ml-2 test-sm bg-red-400 hover:bg-red-500 text-white font-base py-2 px-3 rounded "
            >
              Hủy bỏ
            </button>
            <button
              title="Thêm nhà xe mới"
              onClick={submitCard}
              className="text-sm ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded "
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
