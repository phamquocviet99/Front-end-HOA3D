import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalWaitingCensorship({ visible, onClose }) {
  const navigate = useNavigate();
  if (!visible) return null;
  function handleClose(e) {
    if (e.target.id === "background-add-card") onClose();
  }

  function goToDetail() {
    navigate("/nha-vuon/don-hang/chi-tiet");
  }

  return (
    <div
      id="background-add-card"
      onClick={handleClose}
      className="fixed  inset-0 bg-black bg-opacity-25 flex justify-center items-center backdrop-blur-sm z-20"
    >
      <div
        style={{ minWidth: "400px" }}
        className=" bg-white rounded  overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto"
      >
        <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-2xl mb-0 w-52  text-zinc-600">
              CHỜ KIỂM DUYỆT
            </p>
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
              <p className="mb-0 text-base mt-2">
                Trạng thái : Chờ kiểm duyệt hàng
              </p>
              <p className="mb-0 text-base mt-2">Cửa hàng : Minh Lan Shop</p>
              <p className="mb-0 text-base mt-2">Ngày nhận hàng : 12/12/2022</p>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              title="Hủy bỏ đơn hàng"
              onClick={onClose}
              className="shadow-md mr-2 bg-gray-400 hover:bg-gray-500 text-white font-base py-2 px-3   border-blue-700 rounded "
            >
              Quay lại
            </button>
            <button
              title="Xem chi tiết đơn hàng"
              onClick={goToDetail}
              className=" bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-3 border border-blue-700 rounded-lg shadow-md"
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
