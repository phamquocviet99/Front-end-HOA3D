import React from "react";

export default function ChangePasswordComponent() {
  return (
    <div className="card-edit-user mt-4 p-4">
      <h4 className="text-zinc-500 text-xl mt-3 mb-3 ml-2 font-medium">
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
      <div className="row ">
        <div className="col-md-6 mt-4">
          <p className="text-slate-500 text-sm font-bold mb-2">Tên đăng nhập</p>
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tên đăng nhập"
          />
        </div>
        <div className="col-md-6  mt-4">
          <p className="text-slate-500 text-sm font-bold mb-2">Mật khẩu cũ</p>
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mt-4">
          <p className="text-slate-500 text-sm font-bold mb-2">Mật khẩu mới</p>
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="col-md-6 mt-4">
          <p className="text-slate-500 text-sm font-bold mb-2">Nhập lại</p>
          <input
            className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button class=" mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded ">
          Cập nhật mật khẩu
        </button>
      </div>
    </div>
  );
}
