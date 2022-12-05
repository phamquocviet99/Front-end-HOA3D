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
      <div className="bg-white rounded p-4">
        <p className="text-center text-2xl  text-zinc-600">
          Thêm thẻ ngân hàng
        </p>

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
          <button onClick={submitCard} className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
            Thêm thẻ
          </button>
          <button onClick={onClose} className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
