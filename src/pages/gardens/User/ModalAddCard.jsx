import React from "react";

export default function ModalAddCard({ visible, onClose }) {
  if (!visible) return null;
  function handleClose(e) {
    if (e.target.id === "background-add-card") onClose();
  }
  function submitCard(){
    console.log("ddd")
  }
  return (
    <div
      id="background-add-card"
      onClick={handleClose}
      className="fixed  inset-0 bg-black bg-opacity-25 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="bg-white rounded pb-4 pr-4 pl-4">
      <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-2xl mb-0  text-zinc-600">
              THÊM THẺ
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

        <div className="mt-3">
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ngân hàng"
          />
        </div>
        <div className="mt-3">
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Số thẻ"
          />
        </div>
        <div className="mt-3">
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tên người sử dụng"
          />
        </div>
        <div className="mt-3">
          <input
            className="w-80 border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ngày hết hạn"
          />
        </div>
        <div className="flex justify-end mt-3">
        <button onClick={onClose} className="ml-2 bg-gray-400 hover:bg-gray-500 text-white font-base py-2 px-3   border-blue-700 rounded ">
            Đóng
          </button>
          <button onClick={submitCard} className=" ml-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded ">
            Thêm thẻ
          </button>
          
        </div>
      </div>
    </div>
  );
}
