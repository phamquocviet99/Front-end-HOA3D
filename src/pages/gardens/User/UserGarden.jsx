import React, { Children } from "react";
import "./index.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { TbPoint } from "react-icons/tb";
import { Modal } from "react-bootstrap";
import ModalAddCard from "./ModalAddCard";
import { useState } from "react";

export default function UserGarden() {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const handleCloseAddCardModal = () => setShowAddCardModal(false);
  return (
    // <div className="bg-page rounded-3xl px-5 pt-10 pb-10">
      <div className="bg-page rounded-3xl ">
      <div className="row">
        <div className="col-md-4">
          <div className="card-user-inf">
            <div className="flex justify-center pt-12">
              <img
                className="h-28 w-28 rounded-3"
                src={require("../../../assets/images/avartar/avartar.jpg")}
                alt="FMP"
              />
            </div>
            <div className="flex justify-center pt-3">
              <h6 className="text-lg font-medium">Phạm Quốc Việt</h6>
            </div>
            <div className="flex justify-center pt-3">
              <div className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>5 sao</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="item-task">
                  <RiBillLine className="icon-task" />
                  <div>
                    <h5 className="count-bill">1330</h5>
                    <h6 className="title-bill">Tổng hóa đơn</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item-task">
                  <BiMessageSquareCheck className="icon-task" />
                  <div>
                    <h5 className="count-bill">1230</h5>
                    <h6 className="title-bill">Số đơn đã bán</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-page mt-3"></div>
            <div className="p-3">
              <p className="text-slate-400 mt-2 mb-4">THÔNG TIN HỒ SƠ</p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Tên chủ nhà vườn:{" "}
                <span className="font-medium" span>
                  Phạm Quốc Việt
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Tên nhà vườn :{" "}
                <span className="font-medium" span>
                  Ban garden
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Email :{" "}
                <span className="font-medium" span>
                  viet12@gmail.com
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Số điện thoại :{" "}
                <span className="font-medium" span>
                  0906959619
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Địa chỉ vườn :{" "}
                <span className="font-medium" span>
                  B12/20A Ấp 2
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Phường/Xã :{" "}
                <span className="font-medium" span>
                  Tân Quý Tây
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Huyện :{" "}
                <span className="font-medium" span>
                  Bình Chánh
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-0">
                Thành phố :{" "}
                <span className="font-medium" span>
                  Hồ Chí Minh
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <button class="bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded">
                Khóa tài khoản
              </button>
            </div>
          </div>
          <div className="card-user-inf mt-4 p-4 mb-4">
            <div className="flex justify-between">
              <div className="bg-orange-200 flex justify-center items-center rounded p-2">
                <p className="m-0 text-orange-500">Standard</p>
              </div>
            </div>
            <div className="flex mt-4 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">10 Users</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Up to 10GB storage</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Up to 10GB storage</p>
            </div>
            <div className="flex mt-2 justify-start items-center text-zinc-500">
              <TbPoint className="text-3xl" />
              <p className="m-0  text-xl">Basic Support</p>
            </div>

            <div className="flex justify-between mt-3 text-zinc-600">
              <p className="m-0 text-lg">Days</p>
              <p className="m-0 text-lg">26 of 30 Days</p>
            </div>
            <div className="bg-orange-100 w-full h-2 rounded mt-2">
              <div className="bg-orange-400 w-3/4 h-2 rounded"></div>
            </div>
            <p className="m-0 text-sm text-zinc-400 mt-2">4 days remaining</p>
            <button class=" mt-4 mb-4 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded w-full">
              Upgrade Plan
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-edit-user p-4">
            <h4 className="text-zinc-500 text-xl mb-3 font-medium">
              Cập nhật thông tin nhà vườn
            </h4>
            <div className="line-page" />
            <div className="row mb-4 mt-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Ảnh đại diện</p>
              </div>
              <div className="col-md-8">
                <div className="flex justify-center center mx-auto">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-center w-48">
                    <div className="mb-2">
                      <img
                        className="w-auto mx-auto rounded-full object-cover object-center"
                        src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
                        alt="Avatar Upload"
                      />
                    </div>
                    <label className="cursor-pointer mt-6">
                      <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full">
                        Select Avatar
                      </span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">
                  Tên chủ nhà vườn
                </p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tên chủ nhà vườn"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Tên nhà vườn</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tên chủ nhà vườn"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Email</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Viet@121gmail.com"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Địa chỉ vườn</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="B12/20A"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Phường/Xã</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tân Quý Tây"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Quận/Huyện</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Bình Chánh"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <p className="text-slate-500 text-sm font-bold">Thành phố</p>
              </div>
              <div className="col-md-8">
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Hồ Chí Minh"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button class=" mb-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded ">
                Cập nhật thông tin
              </button>
            </div>
          </div>
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
                <p className="text-slate-500 text-sm font-bold mb-2">
                  Tên đăng nhập
                </p>
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div className="col-md-6  mt-4">
                <p className="text-slate-500 text-sm font-bold mb-2">
                  Mật khẩu cũ
                </p>
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-4">
                <p className="text-slate-500 text-sm font-bold mb-2">
                  Mật khẩu mới
                </p>
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="col-md-6 mt-4">
                <p className="text-slate-500 text-sm font-bold mb-2">
                  Nhập lại
                </p>
                <input
                  className=" border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button class=" mt-3 mb-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded ">
                Cập nhật mật khẩu
              </button>
            </div>
          </div>
          <div className="card-edit-user mt-4 p-4">
            <div className="flex justify-between items-center">
              <h4 className="text-zinc-500 text-xl my-3 ml-2 font-medium">
                Phương thức thanh toán
              </h4>
              <button
                onClick={() => {
                  setShowAddCardModal(true);
                }}
                class=" mt-3 mb-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded "
              >
                Thêm
              </button>
            </div>
            <div className="border w-full p-3 rounded mt-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="w-auto mx-auto object-cover object-center"
                    src={require("../../../assets/images/logo/card_icon.png")}
                    alt="Avatar Upload"
                  />
                </div>
                <div>
                  <button className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
                    Cập nhật
                  </button>
                  <button className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
                    Xóa
                  </button>
                </div>
              </div>

              <div className="flex justify-between my-2">
                <p className="text-zinc-500 text-base font-bold mt-2 mb-2">
                  Phạm Quốc Việt
                </p>
                <p className="text-blue-500 text-base font-bold mt-2 mb-2">
                  Sacombank
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-zinc-400 text-sm font-medium mb-0">
                    0987 6543 2334 5544
                  </p>
                </div>
                <div className="col-md-6 md:flex md:justify-end">
                  <p className="text-zinc-400 text-sm font-medium mb-0 ">
                    Ngày hết hạn : 09/2/2022
                  </p>
                </div>
              </div>
            </div>
            <div className="border w-full p-3 rounded mt-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="w-auto mx-auto object-cover object-center"
                    src={require("../../../assets/images/logo/card_icon.png")}
                    alt="Avatar Upload"
                  />
                </div>
                <div>
                  <button className=" ml-2 bg-orange-100 hover:bg-orange-200 text-orange-400 font-base py-2 px-3  rounded ">
                    Cập nhật
                  </button>
                  <button className="ml-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-400 font-base py-2 px-3   border-blue-700 rounded ">
                    Xóa
                  </button>
                </div>
              </div>

              <div className="flex justify-between my-2">
                <p className="text-zinc-500 text-base font-bold mt-2 mb-2">
                  Phạm Quốc Việt
                </p>
                <p className="text-blue-500 text-base font-bold mt-2 mb-2">
                  Sacombank
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-zinc-400 text-sm font-medium mb-0">
                    0987 6543 2334 5544
                  </p>
                </div>
                <div className="col-md-6 md:flex md:justify-end">
                  <p className="text-zinc-400 text-sm font-medium mb-0 ">
                    Ngày hết hạn : 09/2/2022
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <ModalAddCard
        onClose={handleCloseAddCardModal}
        visible={showAddCardModal}
      />
    </div>
  );
}
