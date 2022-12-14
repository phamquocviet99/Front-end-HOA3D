import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";

export default function ProfileUser() {
  return (
    <div className="p-4">
      <div className="row mt-6">
        <div className="col-md-4">
          <div className=" flex justify-center items-center">
            <img
              className="w-3/5 img-responsive rounded-md"
              src={require("../../../../assets/images/avartar/avartar.jpg")}
              alt="FMP"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="flex justify-start items-center">
            <p className="font-bold text-2xl mb-0 ">Vườn Lan Garden</p>
            <i className="fa-solid fa-location-pin text-gray-400  ml-4"></i>
            <p className=" text-gray-400 mb-0 ml-2">Lâm Đồng , Đà Lạt</p>
          </div>

          <div className="flex items-center justify-start mt-3">
            <p className="mb-0 text-xl font-semibold mr-2">3.9</p>
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>5 sao</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div className="flex justify-start items-center mt-3">
            <div className="flex items-center">
              <div className="flex items-center p-3 bg-green-100 text-green-600 rounded-md">
                <RiBillLine className="text-3xl" />
              </div>
              <div className="ml-3">
                <h5 className="text-lg font-bold mb-0 "> 1230</h5>
                <h6 className="text-base text-gray-500 mb-0">Tổng đơn hàng</h6>
              </div>
            </div>
            <div className="flex items-center ml-5">
              <div className="flex items-center p-3 bg-orange-50 text-orange-600 rounded-md">
                <BiMessageSquareCheck className="text-3xl" />
              </div>
              <div className="ml-3">
                <h5 className="text-lg font-bold mb-0 "> 1230</h5>
                <h6 className="text-base text-gray-500 mb-0">
                  Đơn hàng hoàn thành
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="line-page"></div>
          <p className="font-semibold text-gray-500 mt-3 text-lg">
            THÔNG TIN NHÀ VƯỜN
          </p>
        </div>
        <div className="col-md-8">
          <div className="line-page"></div>
          <p className="font-semibold text-gray-500 mt-3 text-lg">
            THÔNG TIN NHÀ VƯỜN
          </p>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Tên chủ nhà vườn:</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">Phạm Quốc Việt</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400 mb-3">Tên nhà vườn:</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">Vườn Lan Garden</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Email:</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">viet12@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Số điện thoại:</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">0906959619</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Địa chỉ vườn:</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">B12/20A Ấp 2</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Phường/Xã</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">Tân Quý Tây</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Quận/Huyện</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">Bình Chánh</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="text-gray-400  mb-3">Thành phố/Tỉnh</p>
            </div>
            <div className="col-md-7">
              <p className="text-gray-800  mb-3">Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
