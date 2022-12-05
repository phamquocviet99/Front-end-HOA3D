import { React, useState } from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  return (
    <div className="form-login absolute z-20">
      <div className="bg-white p-3 rounded-3xl">
        <div className="row h-22">
          <div className="col-md-6">
            <div className="flex justify-center items-center h-full">
              <h3 className="font-bold">TRANG ĐĂNG KÝ</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flex justify-center items-center h-full">
              <img
                className="h-20"
                src={require("../../assets/images/logo/fmp.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="w-96 h-full p-4">
              <div className="">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Tên chủ nhà vườn"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Tên nhà vườn"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Địa chỉ vườn"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Phường/Xã"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Quận/Huyện"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Thành Phố/Tỉnh"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className=" w-96 h-full p-4">
              <div className="">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="mt-4">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  defaultChecked={false}
                  onChange={() => setCheck(!check)}
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 bg-gray-100 rounded border-gray-300 "
                />
                <label
                  for="checked-checkbox"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                >
                  Bạn có phải là công ty ?
                </label>
              </div>
              {check ? (
                <div>
                  <div className="mt-4">
                    <input
                      className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Số giấy phép kinh doanh"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Ngày cấp"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Nơi cấp"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <input
                    className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Mã số thuế cá nhân"
                  />
                </div>
              )}
              <button
                type="button"
                className="btn btn-login  btn-success mt-4"
                
              >
                Đăng ký nhà vườn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
