import React from "react";
import { useState } from "react";

export default function ChangePasswordComponent() {
  const [showChangeUsername, setShowChangeUsername] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(true);
  return (
    <div className="mt-4 p-4 rounded-lg bg-white shadow-md">
      <h4 className="text-zinc-500 text-base md:text-xl mb-3 ml-2 font-medium">
        Cập nhật mật khẩu
      </h4>

      <div className="bg-orange-100 w-full p-3 rounded-xl">
        <p className=" m-0 font-bold text-base text-orange-400">
          Vui lòng thực hiện đúng yêu cầu để mật khẩu được bảo mật
        </p>
        <p className=" mb-0 mt-2 text-orange-400">
          Tối thiểu 8 ký tự bao gồm chữ hoa và ký hiệu
        </p>
      </div>
      <div className="line-y mt-4 mb-2"></div>
      {showChangeUsername ? (
        <div className="flex justify-between items-center ml-2">
          <div>
            <p className=" mb-2 text-base">Tên đăng nhập</p>
            <p className=" mb-0 text-md text-gray-700">
              support@keenthemes.com
            </p>
          </div>
          <button
          title="Cập nhật tên đăng nhập"
            onClick={() => setShowChangeUsername(false)}
            className="shadow-md mt-3 mb-2 bg-gray-100 hover:bg-sky-50 text-gray-400 hover:text-blue-600 text-base py-2 px-4  rounded "
          >
            Thay đổi
          </button>
        </div>
      ) : (
        <div className="ml-2">
          <div className="row">
            <div className="col-md-6 mt-4">
              <p className=" mb-2 text-base ">Tên đăng nhập mới</p>
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="col-md-6 mt-4">
              <p className=" mb-2 text-base ">Mật khẩu</p>
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="flex justify-end">
              <button title="Xác nhận cập nhật" className="shadow-md mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4  rounded ">
                Cập nhật
              </button>
              <button
              title="Hủy cập nhật"
                onClick={() => setShowChangeUsername(true)}
                className="shadow-md ml-3 mt-3 mb-2 bg-gray-100 hover:bg-sky-50 text-gray-400 hover:text-blue-600 text-base py-2 px-4  rounded "
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="line-y mt-4 mb-2"></div>
      {showChangePassword ? (
        <div className="flex justify-between items-center ml-2">
          <div>
            <p className=" mb-2 text-base">Mật khẩu hiện tại</p>
            <p className=" mb-0 text-md text-gray-700">*****************</p>
          </div>
          <button
          title="Cập nhật mật khẩu"
            onClick={() => setShowChangePassword(false)}
            className="shadow-md mt-3 mb-2 bg-gray-100 hover:bg-sky-50 text-gray-400 hover:text-blue-600 text-base py-2 px-4  rounded "
          >
            Thay đổi
          </button>
        </div>
      ) : (
        <div className="ml-2">
          <div className="row">
            <div className="col-md-4 mt-4">
              <p className=" mb-2 text-base ">Mật khẩu cũ</p>
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="col-md-4 mt-4">
              <p className=" mb-2 text-base ">Mật khẩu mới</p>
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="col-md-4 mt-4">
              <p className=" mb-2 text-base ">Nhập lại mật khẩu</p>
              <input
                className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button title ="Xác nhận cập nhật"className=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4  rounded ">
              Cập nhật
            </button>
            <button
            title="Hủy cập nhật"
              onClick={() => setShowChangePassword(true)}
              className="ml-3 mt-3 mb-2 bg-gray-100 hover:bg-sky-50 text-gray-400 hover:text-blue-600 text-base py-2 px-4  rounded "
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
