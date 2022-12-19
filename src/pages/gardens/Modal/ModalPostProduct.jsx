import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function ModalPostProduct({ visible, onClose }) {
  const [startDate, setStartDate] = useState(new Date());
  if (!visible) return null;
  function handleClose(e) {
    if (e.target.id === "background-add-card") onClose();
  }
  function submitCard() {
    console.log("ddd");
  }
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "mm/dd/yyyy",
    },
  };
  return (
    <div
      id="background-add-card"
      onClick={handleClose}
      className="fixed z-30 inset-0 bg-black bg-opacity-25 flex justify-center items-center backdrop-blur-sm"
    >
      <div className=" bg-white rounded overflow-y-scroll h-3/4 md:overflow-y-hidden md:h-auto w-11/12 md:w-3/5 xl:w-1/3">
        <div className="flex justify-between items-center">
          <div className="w-3/12"></div>
          <div className="w-1/2 justify-center">
            <p className="text-center text-xl mb-0  text-zinc-600">
              ĐĂNG BÁN
            </p>
          </div>
          <div className="w-3/12 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500   h-9 w-9 flex justify-center items-center m-2   focus:ring-0"
            >
              <i className="fa-solid fa-xmark text-2xl "></i>
            </button>
          </div>
        </div>
        <div className="line-y"></div>
        <div className="pl-4 pr-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">Tên sản phẩm</p>
              <select
                id="countries_disabled"
                className="h-10 border border-gray-300 text-gray-700 text-sm rounded p-2 w-full"
              >
                <option className="text-gray-700 text-sm" selected>
                  Hoa Lan
                </option>
                <option className="text-gray-700 text-sm" value="US">
                  United States
                </option>
                <option className="text-gray-700 text-sm" value="CA">
                  Canada
                </option>
                <option className="text-gray-700 text-sm" value="FR">
                  France
                </option>
                <option className="text-gray-700 text-sm" value="DE">
                  Germany
                </option>
              </select>
            </div>
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">Loại sản phẩm</p>
              <select
                id="countries_disabled"
                className=" h-10
                 border border-gray-300 text-gray-700 text-sm rounded p-2 w-full"
              >
                <option className="text-gray-700 text-sm" selected>
                  A
                </option>
                <option className="text-gray-700 text-sm" value="US">
                  B
                </option>
                <option className="text-gray-700 text-sm" value="CA">
                  C
                </option>
                <option className="text-gray-700 text-sm" value="FR">
                  D
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">Số lượng hiện có</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Số lượng"
              />
            </div>
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">Giá bán</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Giá"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">
                Ngày bắt đầu thu hoạch
              </p>
              <DatePicker
                locale={locale}
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="">
              <p className="mb-2 text-zinc-500 text-base">Đến ngày</p>
              <DatePicker
                locale={locale}
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              title="Trở về trang trước"
              onClick={onClose}
              className="ml-2 shadow-md bg-gray-400 hover:bg-gray-400 text-white font-base py-2 px-3 rounded "
            >
              Đóng
            </button>
            <button
              title="Đăng bán sản phẩm này"
              onClick={submitCard}
              className=" ml-2 shadow-md bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-3  rounded "
            >
              Đăng bán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
