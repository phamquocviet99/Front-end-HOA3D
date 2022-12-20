import React from "react";

export default function ModalDetailProductOnSale({ visible, onClose }) {
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
      className="fixed  inset-0 bg-black bg-opacity-25 flex justify-center items-center backdrop-blur-sm z-30"
    >
      <div className=" bg-white rounded  overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto">
        <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-2xl mb-0 text-zinc-600">
              CHI TIẾT SẢN PHẨM
            </p>
          </div>
          <div className="w-3/12 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500   h-9 w-9 flex justify-center items-center m-2  focus:ring-0"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="w-full bg-orange-50 p-2 rounded-md flex justify-center mb-2">
            <p className="text-xl mb-0 text-orange-700">Nhà vườn</p>
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
          <div className="w-full bg-orange-50 p-2 rounded-md flex justify-center mb-2">
            <p className="text-xl mb-0 text-orange-700">Cửa hàng</p>
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

          <div className="flex justify-end mt-3">
            <button
              title="Trở về trang trước"
              onClick={onClose}
              className="ml-2 bg-red-400 hover:bg-red-500 text-white font-base py-2 px-3    rounded "
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
