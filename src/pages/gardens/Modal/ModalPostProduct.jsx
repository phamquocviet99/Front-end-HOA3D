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
        <p className="text-center text-2xl  text-zinc-600">
          Quá trình đăng bán sản phẩm
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Tên sản phẩm</p>
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

            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Số lượng hiện có</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Số lượng"
              />
            </div>
           
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Ngày bắt đầu thu hoạch</p>
              <DatePicker
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Loại sản phẩm</p>
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
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Giá bán</p>
              <input
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Giá"
              />
            </div>
            <div className="mt-3">
              <p className="mb-2 text-zinc-500">Đến ngày</p>
              <DatePicker
                className="w-full border rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
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
