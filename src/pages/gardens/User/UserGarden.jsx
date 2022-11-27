import React from "react";
import "./index.css";
import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";

export default function UserGarden() {
  return (
    <div className="bg-page rounded-3xl px-5 pt-10">
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
                    <h6 className="title-bill">Đơn đã bán</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="line-page mt-3"></div>
            <div className="p-3">
              <p className="text-slate-400 mt-2 mb-4">THÔNG TIN HỒ SƠ</p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Tên chủ :{" "}
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
                  phamquocviet1211999@gmail.com
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Số điện thoại :{" "}
                <span className="font-medium" span>
                  0906959619
                </span>
              </p>
              <p className="text-slate-500 text-sm font-bold mb-3">
                Địa chỉ nhà :{" "}
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
              <p className="text-slate-500 text-sm font-bold mb-3">
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
        </div>
        <div className="col-md-8">
          <div className="bar-menu-edit-user">
            <div className="flex">
              <button class="mr-2 bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded">
                Cập nhật thông tin
              </button>
              <button class="bg-orange-400 hover:bg-orange-500 text-white font-base py-2 px-4 border border-blue-700 rounded">
                Đổi mật khẩu
              </button>
            </div>
          </div>
          <div className="card-edit-user">
            <h4>Thông tin cửa hàng</h4>
            <div className="line-page" />
            <div className="row">
              <div className="col-md-4">
                <p>Ảnh đại diện</p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                   
                    <div className="flex justify-center">
                      <img
                        className="h-16 w-16 rounded-3"
                        src={require("../../../assets/images/avartar/avartar.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
