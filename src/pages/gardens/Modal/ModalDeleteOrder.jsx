import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalDeleteOrder({ visible, onClose }) {
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
      <div className="bg-white rounded p-4 overflow-y-scroll  md:overflow-y-hidden md:h-auto">
        <p className="text-center text-2xl  text-zinc-600">
          Hủy đơn hàng
        </p>
      
        <div>
        <div className="mt-3">
              <p className="mb-2 text-zinc-500">Lý do hủy đơn hàng :</p>
              <textarea
                className="border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80 h-48"
                type="text"
                placeholder="Mã hóa đơn"
              />
            </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button
            onClick={submitCard}
            className=" ml-2 bg-blue-600 hover:bg-blue-700 text-white font-base py-2 px-3  rounded "
          >
            Gửi
          </button>

          <button
            onClick={onClose}
            className="ml-2 bg-red-500 hover:bg-red-600 text-white font-base py-2 px-3   border-blue-700 rounded "
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
