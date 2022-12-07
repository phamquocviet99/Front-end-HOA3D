import { BiMessageSquareCheck } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";

export default function ProfileUserComponent() {
  return (
    <div className="card-user-inf">
      <div className="flex justify-center pt-12">
        <img
          className="h-28 w-28 rounded-3"
          src={require("../../../../assets/images/avartar/avartar.jpg")}
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
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-base py-2 px-4 border border-blue-700 rounded">
          Khóa tài khoản
        </button>
      </div>
    </div>
  );
}
