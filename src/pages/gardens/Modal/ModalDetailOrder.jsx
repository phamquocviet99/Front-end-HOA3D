import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalDetailOrder({ visible, onClose }) {
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
      <div className="bg-white rounded p-4 overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto">
        <p className="text-center text-2xl  text-zinc-600">HÓA ĐƠN</p>
        <div className="row">
          <div className="col-md-6">
            <div className="w-full bg-gray-200 p-2 rounded-md flex justify-center mb-2">
              <p className="text-xl mb-0">Nhà vườn</p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tên chủ nhà vườn :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Ba Garden
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tên nhà vườn :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Ba Vườn
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Số điện thoại :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                0909959619
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Địa chỉ :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                B12/20 Lê Sao
              </p>
            </div>
            <div className="w-full bg-gray-200 p-2 rounded-md flex justify-center mb-2">
              <p className="text-xl mb-0">Cửa hàng</p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tên chủ cửa hàng :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Minh Lan Shop
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tên nhà vườn :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Nguyễn Minh Lan
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Số điện thoại :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                0909656919
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Địa chỉ :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                1230 Đường 3/2, Quận 6
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="w-full bg-gray-200 p-2 rounded-md flex justify-center mb-2">
              <p className="text-xl mb-0">Chi tiết hóa đơn</p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tên sản phẩm
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Hoa Lan Trắng
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Ngày đặt hàng :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                22/11/2022
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Số lượng :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">200kg</p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Tổng tiền :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                12.000.000đ
              </p>
            </div>

            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64 ">
                Tên chành xe :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                Thành Bưởi
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Mã giao hàng :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                TB22033
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Điện thoại chành xe :
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                090962255
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Địa chỉ nhận hàng
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                1234 đường 3/2 Quận 6
              </p>
            </div>
            <div className="flex">
              <p className=" text-slate-500 text-sm md:text-base font-bold mb-3 w-64">
                Ngày dự kiến nhận hàng
              </p>

              <p className="text-slate-500 text-sm md:text-base font-medium mb-3 w-64">
                22/12/2022
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-3">
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
